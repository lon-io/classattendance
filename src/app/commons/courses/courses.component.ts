import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import {Course} from './course.interface';
import {DataService} from '../../services/data.service';
import {ToastComponent} from '../../shared/toast/toast.component';
import {UserService} from '../../services/user/user.service';


@Component({
    selector: 'app-courses',
    templateUrl: 'courses.component.html',
    styleUrls: ['courses.component.css']
})
export class CoursesComponent implements OnInit {

    private courses = [];
    private lecturers = [];
    private isLoading = true;

    private course: Course;
    private isEditing = false;

    private isUserAdmin: boolean;
    private isUserStudent: boolean;
    private isUserLecturer: boolean;

    private addCourseForm: FormGroup;
    private title = new FormControl('', Validators.required);
    private code = new FormControl('', Validators.required);
    private units = new FormControl('', Validators.required);
    private bio = new FormControl('', Validators.required);
    private coordinator = new FormControl('', Validators.required);

    constructor(private http: Http,
                private dataService: DataService,
                private userService: UserService,
                private toast: ToastComponent,
                private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.getCourses();

        this.getLecturers();

        this.course = {
            _id: null,
            title: '',
            code: '',
            units: 1,
            about: { page: { raw: '', html: '' }, bio: ''},
            coordinator: {}
        };

        this.addCourseForm = this.formBuilder.group({
            title: this.title,
            code: this.code,
            units: this.units,
            bio: this.bio,
            coordinator: this.coordinator
        });

        this.isUserAdmin = this.userService.isUserAnAdmin();
        this.isUserLecturer = this.userService.isUserALecturer();
        this.isUserStudent = this.userService.isUserAStudent();
    }

    private getCourses() {
        this.dataService.getCourses().subscribe(
            data => this.courses = data,
            error => console.log(error),
            () => this.isLoading = false
        );
    }

    private getLecturers() {
        this.dataService.getLecturers().subscribe(
            data => this.lecturers = data,
            error => console.log(error),
            () => this.isLoading = false
        );
    }

    addCourse() {
        this.resetCourse();
        this.course.title = this.addCourseForm.value.title;
        this.course.code = this.addCourseForm.value.code;
        this.course.units = this.addCourseForm.value.units;
        this.course.about.bio = this.addCourseForm.value.bio;
        this.course.coordinator = this.addCourseForm.value.coordinator;
        this.dataService.addCourse(this.course).subscribe(
            res => {
                let newCourse = res.json();
                this.courses.push(newCourse);
                this.addCourseForm.reset();
                this.toast.setMessage('item added successfully.', 'success');
            },
            error => console.log(error)
        );
    }

    private resetCourse() {
        this.course = {
            _id: null,
            title: '',
            code: '',
            units: 1,
            about: { page: { raw: '', html: '' }, bio: ''},
            coordinator: {}
        };
    }

    enableEditing(course) {
        this.isEditing = true;
        this.course = course;
    }

    cancelEditing() {
        this.isEditing = false;
        this.resetCourse();
        this.toast.setMessage('item editing cancelled.', 'warning');
        // reload the courses to reset the editing
        this.getCourses();
    }

    editCourse(course) {
        this.dataService.editCourse(course).subscribe(
            res => {
                this.isEditing = false;
                const i = this.courses.findIndex(localCourse => localCourse._id === course._id);
                this.courses[i] = res.json();
                this.toast.setMessage('item edited successfully.', 'success');
            },
            error => console.log(error)
        );
        this.resetCourse();
    }

    deleteCourse(course) {
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.dataService.deleteCourse(course).subscribe(
                res => {
                    // map returns an array of the ids of all courses & indexOf returns the
                    // index at which the id of deleted course passed in as an argument to deleteCourse occurs
                    let pos = this.courses.map(course_ => {
                        return course_._id;
                    }).indexOf(course._id);
                    this.courses.splice(pos, 1);
                    this.toast.setMessage('item deleted successfully.', 'success');
                },
                error => console.log(error)
            );
        }
    }

    isStudentRegistered(course: Course) {
        if (course.students !== null) {
            return course.students.map(student => {
                return student._id;
            }).find(id => {
                return id === this.userService.getUserDetails()._id;
            });
        }
        return false;
    }

    getStyle(course: Course) {
        if (this.isStudentRegistered(course)) {
            return  'green';
        }else {
            return 'inherit';
        }
    }

    registerCourse(course) {
        console.log('register');
    }

    unregisterCourse(course) {
        console.log('unregister');
    }
}
