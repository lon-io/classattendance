/**
 * Created by lon on 12/3/16.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseComponent} from './course/course.component';
import {LecturerComponent} from './lecturer/lecturer.component';
import {StudentComponent} from './student/student.component';
import {LecturesComponent} from './lectures/lectures.component';
import {LectureComponent} from './lecture/lecture.component';

const commonsRoutes: Routes = [
    { path: 'common/course/:id', component: CourseComponent },
    { path: 'common/lecturer/:id', component: LecturerComponent },
    { path: 'common/student/:id', component: StudentComponent },
    { path: 'common/lectures/:id', component: LecturesComponent },
    { path: 'common/lecture/:id', component: LectureComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(commonsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CommonsRoutingModule { }
