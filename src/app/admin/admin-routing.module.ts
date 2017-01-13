/**
 * Created by lon on 12/3/16.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsComponent} from './students/students.component';
import {AdminComponent} from './admin.component';
import {LoggedInGuard} from '../services/logged-in.guard';
import {CoursesComponent} from '../commons/courses/courses.component';
import {LecturersComponent} from './lecturers/lecturers.component';

const adminRoutes: Routes = [
    { path: 'admin', component: AdminComponent, canActivate: [LoggedInGuard], children: [
        { path: '', redirectTo: 'courses', pathMatch: 'full'},
        { path: 'students',  component: StudentsComponent },
        { path: 'lecturers', component: LecturersComponent },
        { path: 'courses',  component: CoursesComponent },
    ]},

];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }
