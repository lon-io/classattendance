/**
 * Created by lon on 12/3/16.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';

import {EqualValidatorDirective} from '../services/equal-validator.directive';
import {FrontRoutingModule} from './front-routing.module';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AboutComponent} from './about/about.component';
import {GlobalModule} from '../global/global.module';
import {FrontComponent} from './front.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FrontRoutingModule,
        GlobalModule
    ],
    declarations: [
        FrontComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AboutComponent,
        EqualValidatorDirective,
    ],
    providers: [
    ],
    exports: [
        // HomeComponent,
        // LoginComponent,
    ]
})
export class FrontModule {}
