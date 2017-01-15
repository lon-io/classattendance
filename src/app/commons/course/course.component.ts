import {Component, OnInit, OnDestroy} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Course} from '../courses/course.interface';
import {ActivatedRoute} from '@angular/router';
import {ToastComponent} from '../../shared/toast/toast.component';
import {UserService} from '../../services/user/user.service';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

    course: Course;
    course_id;
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
            // this.course_id = +params['id']; // (+) converts string 'id' to a number
            this.course_id = params['id']; // (+) converts string 'id' to a number
            // Dispatch action to load the compoonent data.
            this.getCourse();
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    private getCourse() {
        this.dataService.getCourse(this.course_id).subscribe(
            data => this.course = data,
            error => console.log(error),
            () => this.isLoading = false
        );
    }
}
