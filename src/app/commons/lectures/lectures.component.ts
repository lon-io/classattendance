import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

// import {Lecture} from './lecture.interface';
import {DataService} from '../../services/data.service';
import {ToastComponent} from '../../shared/toast/toast.component';
import {UserService} from '../../services/user/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-lectures',
    templateUrl: './lectures.component.html',
    styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit, OnDestroy {

    private lecture = { topic: ''};
    private lectures = [];
    course_id: any;
    private isLoading = true;
    private isEditing = false;

    private sub: any;

    private currentUser: any;
    private isUserAdmin: boolean;
    private isUserStudent: boolean;
    private isUserLecturer: boolean;

    constructor(private http: Http,
                private dataService: DataService,
                private userService: UserService,
                private toast: ToastComponent,
                private route: ActivatedRoute
    ) { }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            // this.course_id = +params['id']; // (+) converts string 'id' to a number
            this.course_id = params['id']; // (+) converts string 'id' to a number
            // Dispatch action to load the compoonent data.
            this.getLectures();
        });

        this.isUserAdmin = this.userService.isUserAnAdmin();
        this.isUserLecturer = this.userService.isUserALecturer();
        this.isUserStudent = this.userService.isUserAStudent();
        this.currentUser = this.userService.getUserDetails();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    private getLectures() {
        this.dataService.getLectures(this.course_id).subscribe(
            data => this.lectures = data,
            error => console.log(error),
            () => this.isLoading = false
        );
    }

    enableEditing(lecture) {
        this.isEditing = true;
        this.lecture = lecture;
    }

    cancelEditing() {
        this.isEditing = false;
        this.resetLecture();
        this.toast.setMessage('item editing cancelled.', 'warning');
        // reload the lectures to reset the editing
        this.getLectures();
    }

    editLecture(lecture) {
        this.dataService.editLecture(lecture).subscribe(
            res => {
                this.isEditing = false;
                const i = this.lectures.findIndex(localCourse => localCourse._id === lecture._id);
                this.lectures[i] = res.json();
                this.toast.setMessage('Success', 'success');
            },
            error => console.log(error)
        );
        this.resetLecture();
    }

    deleteLecture(lecture) {
        if (window.confirm('Are you sure you want to permanently delete this lecture?')) {
            this.dataService.deleteLecture(lecture).subscribe(
                res => {
                    // map returns an array of the ids of all lectures & indexOf returns the
                    // index at which the id of deleted lecture passed in as an argument to deleteCourse occurs
                    let pos = this.lectures.map(lecture_ => {
                        return lecture_._id;
                    }).indexOf(lecture._id);
                    this.lectures.splice(pos, 1);
                    this.toast.setMessage('Lecture deleted successfully.', 'success');
                },
                error => console.log(error)
            );
        }
    }

    private resetLecture() {
        this.lecture = {
            topic: ''
        };
    }

}
