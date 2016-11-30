import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  private user = {};
  private isEditing = false;

  private loginForm: FormGroup;
  private email = new FormControl("", Validators.required);
  private password = new FormControl("", Validators.required);

  constructor(private http: Http,
              private dataService: DataService,
              private toast: ToastComponent,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });
  }

  login() {
    this.dataService.login(this.loginForm.value).subscribe(
      res => {
        var user = res.json();
        // this.loginForm.reset();
        console.log(JSON.stringify(user));
        this.toast.setMessage(JSON.stringify(user), "success");
      },
      error => console.log(error)
    );
  }

  enableEditing(user) {
    this.isEditing = true;
    this.user = user;
  }

  cancelEditing() {
    this.isEditing = false;
    this.user = {};
    this.toast.setMessage("item editing cancelled.", "warning");
  }
}
