import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturerComponent } from './lecturer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GlobalModule} from '../global/global.module';
import {LecturerRoutingModule} from './lecturer-routing.module';
import {CommonsModule} from '../commons/commons.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        GlobalModule,
        LecturerRoutingModule,
        CommonsModule
    ],
    declarations: [LecturerComponent]
})
export class LecturerModule { }
