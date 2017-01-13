import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {UserService} from "../../services/user/user.service";
import {ToastComponent} from "../../shared/toast/toast.component";

@Component({
  selector: 'app-students',
  templateUrl: 'students.component.html',
  styleUrls: ['students.component.css']
})
export class StudentsComponent implements OnInit {

  // @ViewChildren('del') dels;
  //
  // private student: User;
  private students: any;
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
    this.getStudents();

    this.isUserAdmin = this.userService.isUserAnAdmin();
    this.isUserLecturer = this.userService.isUserALecturer();
    this.isUserStudent = this.userService.isUserAStudent();
    this.currentUser = this.userService.getUserDetails();
  }

  private getStudents() {
    this.dataService.getStudents().subscribe(
        data => this.students = data,
        error => console.log(error),
        () => this.isLoading = false
    );
  }

  private deleteStudent(student, i) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      // this.dataService.deleteLecturer(student).subscribe(
      //     res => {
      //         // map returns an array of the ids of all courses & indexOf returns the
      //         // index at which the id of deleted course passed in as an argument to deleteCourse occurs
      //         let pos = this.students.map(student_ => {
      //             return student_._id;
      //         }).indexOf(student._id);
      //         this.students.splice(pos, 1);
      //         this.toast.setMessage('item deleted successfully.', 'success');
      //     },
      //     error => console.log(error)
      // );
    }
  }

}
