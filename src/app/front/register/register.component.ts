import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { ToastComponent } from '../../shared/toast/toast.component';

import { DataService } from '../../services/data.service';

import { User } from './user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User;
  private isStudent : boolean;

  private registerForm: FormGroup;
  private email = new FormControl("", Validators.required);
  private password = new FormControl("", Validators.pattern(""));
  private confirmPassword = new FormControl("", Validators.pattern(""));
  private firstname = new FormControl("", Validators.required);
  private  middlename = new FormControl("", Validators.required);
  private  lastname = new FormControl("", Validators.required);
  private matric_no = new FormControl("", Validators.pattern(""));
  private rfid_uid = new FormControl("", Validators.pattern(""));
  private gender = new FormControl("", Validators.required);
  private role = new FormControl("", Validators.required);
  private level = new FormControl("", Validators.pattern(""));
  private title = new FormControl("", Validators.pattern(""));
  private specialization = new FormControl("", Validators.pattern(""));

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
              private dataService: DataService,
              private toast: ToastComponent,
              private formBuilder: FormBuilder) { }

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
    this.registerForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
      confirmPasswrd: this.confirmPassword,
      firstname: this.firstname,
      middlename: this.middlename,
      lastname: this.lastname,
      matric_no: this.matric_no,
      rfid_uid: this.rfid_uid,
      gender: this.gender,
      role: this.role,
      level: this.level,
      title: this.title,
      specialization: this.specialization,
    });
    this.isStudent = this.user.role == this.roles[0].value ;
  }

  register(user) {
    this.dataService.register(user).subscribe(
        res => {
          var user = res.json();
          console.log(JSON.stringify(user));
          this.toast.setMessage(JSON.stringify(user), "success");
        },
        error => console.log(error)
    );
  }

  setRole(){
    this.isStudent = this.user.role == this.roles[0].value;
  }
}
