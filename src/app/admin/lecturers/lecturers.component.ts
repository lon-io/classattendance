import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {User} from '../../interfaces/user.interface';
import {UserService} from '../../services/user/user.service';
import {ToastComponent} from '../../shared/toast/toast.component';
// import {ViewChildren} from '@angular/core/src/metadata/di';

@Component({
    selector: 'app-lecturers',
    templateUrl: './lecturers.component.html',
    styleUrls: ['./lecturers.component.css']
})
export class LecturersComponent implements OnInit {

    // @ViewChildren('del') dels;
    //
    // private lecturer: User;
    private lecturers: any;
    private isLoading: boolean = true;
    private currentUser: any;
    private isUserAdmin: boolean;
    private isUserStudent: boolean;
    private isUserLecturer: boolean;

    constructor(
        private dataService: DataService,
        private userService: UserService,
        private toast: ToastComponent,
    ) { }

    ngOnInit() {
        this.getLecturers();

        this.isUserAdmin = this.userService.isUserAnAdmin();
        this.isUserLecturer = this.userService.isUserALecturer();
        this.isUserStudent = this.userService.isUserAStudent();
        this.currentUser = this.userService.getUserDetails();
    }

    private getLecturers() {
        this.dataService.getLecturers().subscribe(
            data => this.lecturers = data,
            error => console.log(error),
            () => this.isLoading = false
        );
    }

    private deleteLecturer(lecturer, i) {
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            // this.dataService.deleteLecturer(lecturer).subscribe(
            //     res => {
            //         // map returns an array of the ids of all courses & indexOf returns the
            //         // index at which the id of deleted course passed in as an argument to deleteCourse occurs
            //         let pos = this.lecturers.map(lecturer_ => {
            //             return lecturer_._id;
            //         }).indexOf(lecturer._id);
            //         this.lecturers.splice(pos, 1);
            //         this.toast.setMessage('item deleted successfully.', 'success');
            //     },
            //     error => console.log(error)
            // );
        }
    }
}
