import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';

import { DataService } from '../services/data.service';
import {Course} from "./course.interface";


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  private courses = [];
  private isLoading = true;

  private course : Course;
  private isEditing = false;

  private addCourseForm: FormGroup;
  private title = new FormControl("", Validators.required);
  private code = new FormControl("", Validators.required);
  private units = new FormControl("", Validators.required);
  private bio = new FormControl("", Validators.required);

  constructor(private http: Http,
              private dataService: DataService,
              private toast: ToastComponent,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

      this.course = {
          _id: null,
          title: '',
          code: '',
          units: 1,
          about: { page: { raw: '', html: '' }, bio: ''}
      };

    this.getCourses();

    this.addCourseForm = this.formBuilder.group({
      title: this.title,
      code: this.code,
      units: this.units,
      bio: this.bio
    });
  }

  getCourses() {
    this.dataService.getCourses().subscribe(
        data => this.courses = data,
        error => console.log(error),
        () => this.isLoading = false
    );
  }

  addCourse() {
      this.course.title = this.addCourseForm.value.title;
      this.course.code = this.addCourseForm.value.code;
      this.course.units = this.addCourseForm.value.units;
      this.course.about.bio = this.addCourseForm.value.bio;
    this.dataService.addCourse(this.course).subscribe(
        res => {
          var newCourse = res.json();
          this.courses.push(newCourse);
          this.addCourseForm.reset();
          this.toast.setMessage("item added successfully.", "success");
        },
        error => console.log(error)
    );
  }

  enableEditing(course) {
    this.isEditing = true;
    this.course._id = course._id;
    this.course.title = course.title ? course.title : '';
    this.course.code = course.code ? course.code : '';
    this.course.units = course.units ? course.units : '';
    this.course.about = course.about ? course.about : { page: { raw: '', html: '' }, bio: ''};
  }

  cancelEditing() {
    this.isEditing = false;
    this.course = {
        _id: '',
        title: '',
        code: '',
        units: 1,
        about: { page: { raw: '', html: '' }, bio: ''}
    };
    this.toast.setMessage("item editing cancelled.", "warning");
    // reload the courses to reset the editing
    this.getCourses();
  }

  editCourse(course) {
    this.dataService.editCourse(course).subscribe(
        res => {
          this.isEditing = false;
            console.log(course);
          this.course = course;
          this.toast.setMessage("item edited successfully.", "success");
        },
        error => console.log(error)
    );
  }

  deleteCourse(course) {
    if(window.confirm("Are you sure you want to permanently delete this item?")) {
      this.dataService.deleteCourse(course).subscribe(
          res => {
            var pos = this.courses.map(course => { return course._id }).indexOf(course._id);
            this.courses.splice(pos, 1);
            this.toast.setMessage("item deleted successfully.", "success");
          },
          error => console.log(error)
      );
    }
  }
}
