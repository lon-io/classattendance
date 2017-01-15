import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { ToastComponent } from '../../shared/toast/toast.component';

import { DataService } from '../../services/data.service';

import { User } from '../../interfaces/user.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User;
  private isStudent: boolean;


  /* standing data goes here*/
  public genders = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
  ];
  public titles = [
    { value: 'Prof.', display: 'Prof.'},
    { value: 'Dr.', display: 'Dr.' },
    { value: 'Mr.', display: 'Mr.' },
    { value: 'Mrs.', display: 'Mrs.' },
    { value: 'Miss', display: 'Miss' }
  ];
  public specializations = [
    { value: 'Control and Instrumentation', display: 'Control and Instrumentation' },
    { value: 'Power', display: 'Power' },
    { value: 'Solid State', display: 'Solid State' },
    { value: 'Communications', display: 'Communications'}
  ];
  public roles = [
    { value: 'Student', display: 'Student' },
    { value: 'Lecturer', display: 'Lecturer' },
  ];

  constructor(private http: Http,
              private router: Router,
              private dataService: DataService,
              private toast: ToastComponent) { }

  ngOnInit() {
    this.user = {
      email: '',
      password: '',
      confirmPassword: '',
      firstname: '',
      middlename: '',
      lastname: '',
      matric_no: null,
      rfid_uid: null,
      gender: this.genders[0].value,
      role: this.roles[0].value,
      level: 100,
      title: null,
      specialization: null,
    };
    // this.registerForm = this.formBuilder.group({
    //   email: this.user.email,
    //   password: this.user.password,
    //   confirmPassword: this.user.confirmPassword,
    //   firstname: this.user.firstname,
    //   middlename: this.user.middlename,
    //   lastname: this.user.lastname,
    //   matric_no: this.user.matric_no,
    //   rfid_uid: this.user.rfid_uid,
    //   gender: this.user.gender,
    //   role: this.user.role,
    //   level: this.user.level,
    //   title: this.user.title,
    //   specialization: this.user.specialization,
    // });
    this.isStudent = this.user.role === this.roles[0].value ;
  }

  register(user) {
    console.log(user);
    this.dataService.register(user).subscribe(
        res => {
          let response = res.json();
          this.toast.setMessage(response.message, 'success');
          this.router.navigate(['login']);
        },
        error => console.log(error)
    );
  }

  setRole() {
    this.isStudent = this.user.role === this.roles[0].value;
  }
}
