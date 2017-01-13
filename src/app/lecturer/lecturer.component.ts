import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user/user.service';
import {DataService} from '../services/data.service';

@Component({
    selector: 'app-lecturer',
    templateUrl: './lecturer.component.html',
    styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {

    constructor(
        private userService: UserService,
        private dateService: DataService
    ) { }

    ngOnInit() {
    }

}
