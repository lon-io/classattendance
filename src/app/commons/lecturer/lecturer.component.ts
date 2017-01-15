import {Component, OnInit, OnDestroy} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';
import {ToastComponent} from '../../shared/toast/toast.component';
import {UserService} from '../../services/user/user.service';
import {User} from '../../interfaces/user.interface';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit, OnDestroy {

  lecturer: User;
  lecturer_id;
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
      // this.lecturer_id = +params['id']; // (+) converts string 'id' to a number
      this.lecturer_id = params['id']; // (+) converts string 'id' to a number
      // Dispatch action to load the compoonent data.
      this.getLecturer();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private getLecturer() {
    this.dataService.getLecturer(this.lecturer_id).subscribe(
        data => this.lecturer = data,
        error => console.log(error),
        () => this.isLoading = false
    );
  }
}
