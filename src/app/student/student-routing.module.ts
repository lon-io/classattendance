/**
 * Created by lon on 12/3/16.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProfileComponent} from "./profile/profile.component";
import {LoggedInGuard} from "../services/logged-in.guard";

const studentRoutes: Routes = [
    { path: 'profile',  component: ProfileComponent, canActivate: [LoggedInGuard] }
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