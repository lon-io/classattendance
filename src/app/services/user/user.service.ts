/**
 * Created by lon on 12/25/16.
 */
import { Injectable } from '@angular/core';
import {isNullOrUndefined} from "util";
import {isNull} from "util";

@Injectable()
export class UserService {
    private loggedIn = false;

    constructor() {
        this.loggedIn = !!localStorage.getItem('token');
    }

    login(res) {
        localStorage.setItem('current_user', JSON.stringify(res.user));
        localStorage.setItem('token', res.user.token);
        this.loggedIn = true;
        return res.success;
    }

    logout() {
        localStorage.removeItem('current_user');
        localStorage.removeItem('token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    getUserDetails(){
        if(this.isLoggedIn()){
            return JSON.parse(localStorage.getItem('current_user'));
        }
    }

    isUserAStudent(){
        if(this.isLoggedIn()){
            return JSON.parse(localStorage.getItem('current_user')).__t === 'Student';
        }
        return false;
    }

    isUserALecturer(){
        if(this.isLoggedIn()){
            return JSON.parse(localStorage.getItem('current_user')).__t === 'Lecturer';
        }
        return false;
    }

    isUserAnAdmin(){
        if(this.isLoggedIn()){
            return isNull(JSON.parse(localStorage.getItem('current_user')).role) ? false : (JSON.parse(localStorage.getItem('current_user')).role.slug  === 'admin');
        }
        return false;
    }
}