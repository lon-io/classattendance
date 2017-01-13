import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursesComponent} from './courses/courses.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GlobalModule} from '../global/global.module';
import {CommonsRoutingModule} from './commons-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        GlobalModule,
        CommonsRoutingModule
    ],
    declarations: [
        CoursesComponent
    ],
    exports: [
        CoursesComponent
    ]
})
export class CommonsModule { }
