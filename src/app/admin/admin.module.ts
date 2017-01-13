import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {StudentsComponent} from './students/students.component';
import {AdminRoutingModule} from './admin-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GlobalModule} from '../global/global.module';
import {CommonsModule} from '../commons/commons.module';
import {LecturersComponent} from './lecturers/lecturers.component';

@NgModule({
    imports: [
        CommonModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        GlobalModule,
        AdminRoutingModule,
        CommonsModule,
    ],
    declarations: [
        AdminComponent,
        StudentsComponent,
        LecturersComponent
    ],
})
export class AdminModule {

}
