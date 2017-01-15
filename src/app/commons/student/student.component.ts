import {Component, OnInit, OnDestroy} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';
import {ToastComponent} from '../../shared/toast/toast.component';
import {UserService} from '../../services/user/user.service';
import {User} from '../../interfaces/user.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnDestroy {

  student: User;
  student_id;
  private sub: any;
  isLoading: boolean = true;

  constructor(
      private toast: ToastComponent,
      private dataService: DataService,
      private userService: UserService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // this.student_id = +params['id']; // (+) converts string 'id' to a number
      this.student_id = params['id']; // (+) converts string 'id' to a number
      // Dispatch action to load the compoonent data.
      this.getStudent();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private getStudent() {
    this.dataService.getStudent(this.student_id).subscribe(
        data => this.student = data,
        error => console.log(error),
        () => this.isLoading = false
    );
  }
}
