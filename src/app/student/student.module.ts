import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from "./profile/profile.component";
import {StudentRoutingModule} from "./student-routing.module";
import {GlobalModule} from "../global/global.module";

@NgModule({
    imports: [
        CommonModule,
        StudentRoutingModule,
        GlobalModule
    ],
    declarations: [
        ProfileComponent,
    ]
})
export class StudentModule {

}
