/**
 * Created by lon on 12/3/16.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursesComponent} from './courses/courses.component';

const commonsRoutes: Routes = [
    { path: 'courses',  component: CoursesComponent },
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
