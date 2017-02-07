import {Component, OnInit, OnDestroy} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';
import {ToastComponent} from '../../shared/toast/toast.component';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit, OnDestroy {

  lecture: any;
  lecture_id: any;
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
      // this.lecture_id = +params['id']; // (+) converts string 'id' to a number
      this.lecture_id = params['id']; // (+) converts string 'id' to a number
      // Dispatch action to load the compoonent data.
      this.getLecture();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private getLecture() {
    this.dataService.getLecture(this.lecture_id).subscribe(
        data => this.lecture = data,
        error => console.log(error),
        () => this.isLoading = false
    );
  }
}
