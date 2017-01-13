/**
 * Created by lon on 12/3/16.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LecturerComponent} from './lecturer.component';
import {CoursesComponent} from '../commons/courses/courses.component';
import {LoggedInGuard} from '../services/logged-in.guard';

const lecturerRoutes: Routes = [
    { path: 'lecturer',  component: LecturerComponent, canActivate: [LoggedInGuard], children: [
        { path: '', redirectTo: 'courses', pathMatch: 'full'},
        { path: 'courses',  component: CoursesComponent },
    ] },
];

@NgModule({
    imports: [
        RouterModule.forChild(lecturerRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LecturerRoutingModule { }
