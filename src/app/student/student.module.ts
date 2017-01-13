import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {StudentRoutingModule} from './student-routing.module';
import {GlobalModule} from '../global/global.module';
import {StudentComponent} from './student.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonsModule} from '../commons/commons.module';

@NgModule({
    imports: [
        CommonModule,
        StudentRoutingModule,
        GlobalModule,
        FormsModule,
        ReactiveFormsModule,
        CommonsModule
    ],
    declarations: [
        StudentComponent,
        ProfileComponent,
    ]
})
export class StudentModule {

}
