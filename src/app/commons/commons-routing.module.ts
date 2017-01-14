/**
 * Created by lon on 12/3/16.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseComponent} from './course/course.component';
import {LecturerComponent} from './lecturer/lecturer.component';
import {StudentComponent} from './student/student.component';

const commonsRoutes: Routes = [
    { path: 'course/:id', component: CourseComponent },
    { path: 'lecturer/:id', component: LecturerComponent },
    { path: 'student/:id', component: StudentComponent }
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
