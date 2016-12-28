import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { EqualValidator } from './services/equal-validator.directive';  // import validator

import { ToastComponent } from './shared/toast/toast.component';
import { CoursesComponent } from './courses/courses.component';
import {FrontModule} from "./front/front.module";
import {CommonModule} from "@angular/common";
import {UserService} from "./services/user/user.service";
import {GlobalModule} from "./global/global.module";
import {StudentModule} from "./student/student.module";
import {LoggedInGuard} from "./services/logged-in.guard";

const routing = RouterModule.forRoot([
    { path: 'courses', component: CoursesComponent, canActivate: [LoggedInGuard]},
    // { path: '**', component: PageNotFoundComponent }
]);
@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
        // ToastComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        GlobalModule,
        FrontModule,
        StudentModule
    ],
    providers: [
        DataService,
        UserService,
        ToastComponent,
        LoggedInGuard
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
