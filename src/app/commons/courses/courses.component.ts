import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import {Course} from './course.interface';
import {DataService} from '../../services/data.service';
import {ToastComponent} from '../../shared/toast/toast.component';
import {UserService} from '../../services/user/user.service';
import {ViewChildren} from '@angular/core/src/metadata/di';


@Component({
    selector: 'app-courses',
    templateUrl: 'courses.component.html',
    styleUrls: ['courses.component.css']
})
export class CoursesComponent implements OnInit {

    @ViewChildren('reg') regs;

    private courses = [];
    private lecturers = [];
    private isLoading = true;

    private course: Course;
    private isEditing = false;

    private currentUser: any;
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
        this.currentUser = this.userService.getUserDetails();
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
                this.toast.setMessage('Success', 'success');
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
                return id === this.currentUser._id;
            });
        }
        return false;
    }

    getStyle(course: Course) {
        if (this.isStudentRegistered(course)) {
            return  '#128f76';
        }else {
            return 'inherit';
        }
    }

    updateCourseForStudent(course: Course, i_: number, isReg: boolean) {
        if (isReg) {
            this.updateRegButton(i_, false);
        }else {
            this.updateUnRegButton(i_, false);
        }
        this.dataService.editCourse(course).subscribe(
            res => {
                this.isEditing = false;
                const i = this.courses.findIndex(localCourse => localCourse._id === course._id);
                this.courses[i] = res.json();
                this.toast.setMessage('Success', 'success');
                if (isReg) {
                    this.updateRegButton(i_, true);
                }else {
                    this.updateUnRegButton(i_, true);
                }
            },
            error => {
                console.log(error);
                if (isReg) {
                    this.updateRegButton(i_, true);
                }else {
                    this.updateUnRegButton(i_, true);
                }
            }
        );
        this.resetCourse();
    }

    registerCourse(course: Course, i: number) {
        if (this.isStudentRegistered(course)) {
            this.toast.setMessage('You are already Registered, please contact the administrator', 'error');
            return;
        }
        let student = this.currentUser;
        this.course = course;
        this.course.students = this.course.students.map(student_ => {
            return student_._id;
        });
        this.course.students.push(student._id);
        this.updateCourseForStudent(this.course, i, true);
    }

    unregisterCourse(course: Course, i: number) {
        if (!this.isStudentRegistered(course)) {
            this.toast.setMessage('You were not previously Registered, please contact the administrator', 'error');
            return;
        }
        let student = this.currentUser;
        let pos = course.students.map(student_ => {
            return student_._id;
        }).find(id => {
            return id === student._id;
        });
        course.students.splice(pos, 1);
        this.updateCourseForStudent(course, i, false);
    }

    private updateRegButton(i: number, enable: boolean) {
        this.regs.toArray().find((e) => {
            return e.nativeElement.getAttribute('id') === 'reg' + i;
        }).nativeElement.disabled = !enable;
    }

    private updateUnRegButton(i: number, enable: boolean) {
        this.regs.toArray().find((e) => {
            return e.nativeElement.getAttribute('id') === 'reg' + i;
        }).nativeElement.disabled = !enable;
    }
}
