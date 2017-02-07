import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursesComponent} from './courses/courses.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GlobalModule} from '../global/global.module';
import {CommonsRoutingModule} from './commons-routing.module';
import { CourseComponent } from './course/course.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { StudentComponent } from './student/student.component';
import { LecturesComponent } from './lectures/lectures.component';
import { LectureComponent } from './lecture/lecture.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        GlobalModule,
        CommonsRoutingModule
    ],
    declarations: [
        CoursesComponent,
        CourseComponent,
        LecturerComponent,
        StudentComponent,
        LecturesComponent,
        LectureComponent
    ],
    exports: [
        CoursesComponent
    ]
})
export class CommonsModule { }
