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

const routing = RouterModule.forRoot([
    // { path: '',      component: HomeComponent },
    // { path: 'about', component: AboutComponent },
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    { path: 'courses', component: CoursesComponent},
  // { path: '**', component: PageNotFoundComponent }
]);
@NgModule({
  declarations: [
    AppComponent,
    EqualValidator,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    FrontModule
  ],
  providers: [
    DataService,
    ToastComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
