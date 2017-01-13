import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';

import { ToastComponent } from './shared/toast/toast.component';
import { CoursesComponent } from './commons/courses/courses.component';
import {FrontModule} from './front/front.module';
import {CommonModule} from '@angular/common';
import {UserService} from './services/user/user.service';
import {GlobalModule} from './global/global.module';
import {StudentModule} from './student/student.module';
import {LoggedInGuard} from './services/logged-in.guard';
import {CommonsModule} from './commons/commons.module';
import {LecturerModule} from './lecturer/lecturer.module';
import {WildcardRoutingModule} from './wildcard-routing/wildcard-routing.module';
import {AdminModule} from './admin/admin.module';

const routing = RouterModule.forRoot([
    { path: 'courses', component: CoursesComponent, canActivate: [LoggedInGuard]},
]);
@NgModule({
    declarations: [
        AppComponent,
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
        StudentModule,
        LecturerModule,
        AdminModule,
        CommonsModule,
        WildcardRoutingModule,
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
