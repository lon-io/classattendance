import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursesComponent} from './courses/courses.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GlobalModule} from '../global/global.module';
import {CommonsRoutingModule} from './commons-routing.module';
import { CourseComponent } from './course/course.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { StudentComponent } from './student/student.component';

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
        StudentComponent
    ],
    exports: [
        CoursesComponent
    ]
})
export class CommonsModule { }
