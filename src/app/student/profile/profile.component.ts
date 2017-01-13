import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../../shared/toast/toast.component';
import {UserService} from '../../services/user/user.service';
import {User} from '../../front/register/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService,
              private toast: ToastComponent,
  ) { }

  ngOnInit() {
    this.user = this.userService.getUserDetails();
  }

}
