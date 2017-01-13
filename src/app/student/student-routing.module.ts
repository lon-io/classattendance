/**
 * Created by lon on 12/3/16.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProfileComponent} from './profile/profile.component';
import {LoggedInGuard} from '../services/logged-in.guard';
import {StudentComponent} from './student.component';
import {CoursesComponent} from '../commons/courses/courses.component';

const studentRoutes: Routes = [
    { path: 'student',  component: StudentComponent, canActivate: [LoggedInGuard], children: [
        { path: '', redirectTo: 'courses', pathMatch: 'full'},
        { path: 'profile',  component: ProfileComponent,  },
        { path: 'courses',  component: CoursesComponent },
    ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(studentRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class StudentRoutingModule { }
