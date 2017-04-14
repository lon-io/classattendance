webpackJsonp([1,5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {ViewChildren} from '@angular/core/src/metadata/di';
var LecturersComponent = (function () {
    function LecturersComponent(dataService, userService, toast) {
        this.dataService = dataService;
        this.userService = userService;
        this.toast = toast;
        this.isLoading = true;
    }
    LecturersComponent.prototype.ngOnInit = function () {
        this.getLecturers();
        this.isUserAdmin = this.userService.isUserAnAdmin();
        this.isUserLecturer = this.userService.isUserALecturer();
        this.isUserStudent = this.userService.isUserAStudent();
        this.currentUser = this.userService.getUserDetails();
    };
    LecturersComponent.prototype.getLecturers = function () {
        var _this = this;
        this.dataService.getLecturers().subscribe(function (data) { return _this.lecturers = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    LecturersComponent.prototype.deleteLecturer = function (lecturer, i) {
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            // this.dataService.deleteLecturer(lecturer).subscribe(
            //     res => {
            //         // map returns an array of the ids of all courses & indexOf returns the
            //         // index at which the id of deleted course passed in as an argument to deleteCourse occurs
            //         let pos = this.lecturers.map(lecturer_ => {
            //             return lecturer_._id;
            //         }).indexOf(lecturer._id);
            //         this.lecturers.splice(pos, 1);
            //         this.toast.setMessage('item deleted successfully.', 'success');
            //     },
            //     error => console.log(error)
            // );
        }
    };
    return LecturersComponent;
}());
LecturersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-lecturers',
        template: __webpack_require__(371),
        styles: [__webpack_require__(344)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _c || Object])
], LecturersComponent);

var _a, _b, _c;
//# sourceMappingURL=lecturers.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentsComponent = (function () {
    function StudentsComponent(dataService, userService, toast) {
        this.dataService = dataService;
        this.userService = userService;
        this.toast = toast;
        this.isLoading = true;
    }
    StudentsComponent.prototype.ngOnInit = function () {
        this.getStudents();
        this.isUserAdmin = this.userService.isUserAnAdmin();
        this.isUserLecturer = this.userService.isUserALecturer();
        this.isUserStudent = this.userService.isUserAStudent();
        this.currentUser = this.userService.getUserDetails();
    };
    StudentsComponent.prototype.getStudents = function () {
        var _this = this;
        this.dataService.getStudents().subscribe(function (data) { return _this.students = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    StudentsComponent.prototype.deleteStudent = function (student, i) {
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            // this.dataService.deleteLecturer(student).subscribe(
            //     res => {
            //         // map returns an array of the ids of all courses & indexOf returns the
            //         // index at which the id of deleted course passed in as an argument to deleteCourse occurs
            //         let pos = this.students.map(student_ => {
            //             return student_._id;
            //         }).indexOf(student._id);
            //         this.students.splice(pos, 1);
            //         this.toast.setMessage('item deleted successfully.', 'success');
            //     },
            //     error => console.log(error)
            // );
        }
    };
    return StudentsComponent;
}());
StudentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-students',
        template: __webpack_require__(372),
        styles: [__webpack_require__(345)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _c || Object])
], StudentsComponent);

var _a, _b, _c;
//# sourceMappingURL=students.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CourseComponent = (function () {
    function CourseComponent(toast, dataService, userService, route) {
        this.toast = toast;
        this.dataService = dataService;
        this.userService = userService;
        this.route = route;
        this.isLoading = true;
    }
    CourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            // this.course_id = +params['id']; // (+) converts string 'id' to a number
            _this.course_id = params['id']; // (+) converts string 'id' to a number
            // Dispatch action to load the compoonent data.
            _this.getCourse();
        });
    };
    CourseComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CourseComponent.prototype.getCourse = function () {
        var _this = this;
        this.dataService.getCourse(this.course_id).subscribe(function (data) { return _this.course = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    return CourseComponent;
}());
CourseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-course',
        template: __webpack_require__(374),
        styles: [__webpack_require__(347)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object])
], CourseComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=course.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LectureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LectureComponent = (function () {
    function LectureComponent(toast, dataService, userService, route) {
        this.toast = toast;
        this.dataService = dataService;
        this.userService = userService;
        this.route = route;
        this.isLoading = true;
    }
    LectureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            // this.lecture_id = +params['id']; // (+) converts string 'id' to a number
            _this.lecture_id = params['id']; // (+) converts string 'id' to a number
            // Dispatch action to load the compoonent data.
            _this.getLecture();
        });
    };
    LectureComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LectureComponent.prototype.getLecture = function () {
        var _this = this;
        this.dataService.getLecture(this.lecture_id).subscribe(function (data) { return _this.lecture = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    return LectureComponent;
}());
LectureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-lecture',
        template: __webpack_require__(376),
        styles: [__webpack_require__(349)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object])
], LectureComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=lecture.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LecturerComponent = (function () {
    function LecturerComponent(toast, dataService, userService, route) {
        this.toast = toast;
        this.dataService = dataService;
        this.userService = userService;
        this.route = route;
        this.isLoading = true;
    }
    LecturerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            // this.lecturer_id = +params['id']; // (+) converts string 'id' to a number
            _this.lecturer_id = params['id']; // (+) converts string 'id' to a number
            // Dispatch action to load the compoonent data.
            _this.getLecturer();
        });
    };
    LecturerComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LecturerComponent.prototype.getLecturer = function () {
        var _this = this;
        this.dataService.getLecturer(this.lecturer_id).subscribe(function (data) { return _this.lecturer = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    return LecturerComponent;
}());
LecturerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-lecturer',
        template: __webpack_require__(377),
        styles: [__webpack_require__(350)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object])
], LecturerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=lecturer.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Lecture} from './lecture.interface';




var LecturesComponent = (function () {
    function LecturesComponent(http, dataService, userService, toast, route) {
        this.http = http;
        this.dataService = dataService;
        this.userService = userService;
        this.toast = toast;
        this.route = route;
        this.lecture = { topic: '' };
        this.lectures = [];
        this.isLoading = true;
        this.isEditing = false;
    }
    LecturesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            // this.course_id = +params['id']; // (+) converts string 'id' to a number
            _this.course_id = params['id']; // (+) converts string 'id' to a number
            // Dispatch action to load the compoonent data.
            _this.getLectures();
        });
        this.isUserAdmin = this.userService.isUserAnAdmin();
        this.isUserLecturer = this.userService.isUserALecturer();
        this.isUserStudent = this.userService.isUserAStudent();
        this.currentUser = this.userService.getUserDetails();
    };
    LecturesComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LecturesComponent.prototype.getLectures = function () {
        var _this = this;
        this.dataService.getLectures(this.course_id).subscribe(function (data) { return _this.lectures = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    LecturesComponent.prototype.enableEditing = function (lecture) {
        this.isEditing = true;
        this.lecture = lecture;
    };
    LecturesComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.resetLecture();
        this.toast.setMessage('item editing cancelled.', 'warning');
        // reload the lectures to reset the editing
        this.getLectures();
    };
    LecturesComponent.prototype.editLecture = function (lecture) {
        var _this = this;
        this.dataService.editLecture(lecture).subscribe(function (res) {
            _this.isEditing = false;
            var i = _this.lectures.findIndex(function (localCourse) { return localCourse._id === lecture._id; });
            _this.lectures[i] = res.json();
            _this.toast.setMessage('Success', 'success');
        }, function (error) { return console.log(error); });
        this.resetLecture();
    };
    LecturesComponent.prototype.deleteLecture = function (lecture) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this lecture?')) {
            this.dataService.deleteLecture(lecture).subscribe(function (res) {
                // map returns an array of the ids of all lectures & indexOf returns the
                // index at which the id of deleted lecture passed in as an argument to deleteCourse occurs
                var pos = _this.lectures.map(function (lecture_) {
                    return lecture_._id;
                }).indexOf(lecture._id);
                _this.lectures.splice(pos, 1);
                _this.toast.setMessage('Lecture deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    LecturesComponent.prototype.resetLecture = function () {
        this.lecture = {
            topic: ''
        };
    };
    return LecturesComponent;
}());
LecturesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-lectures',
        template: __webpack_require__(378),
        styles: [__webpack_require__(351)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object])
], LecturesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=lectures.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentComponent = (function () {
    function StudentComponent(toast, dataService, userService, route) {
        this.toast = toast;
        this.dataService = dataService;
        this.userService = userService;
        this.route = route;
        this.isLoading = true;
    }
    StudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            // this.student_id = +params['id']; // (+) converts string 'id' to a number
            _this.student_id = params['id']; // (+) converts string 'id' to a number
            // Dispatch action to load the compoonent data.
            _this.getStudent();
        });
    };
    StudentComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    StudentComponent.prototype.getStudent = function () {
        var _this = this;
        this.dataService.getStudent(this.student_id).subscribe(function (data) { return _this.student = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    return StudentComponent;
}());
StudentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-student',
        template: __webpack_require__(379),
        styles: [__webpack_require__(352)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object])
], StudentComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=student.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(toast) {
        this.toast = toast;
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(380),
        styles: [__webpack_require__(353)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FrontComponent = (function () {
    function FrontComponent(userService) {
        this.userService = userService;
    }
    FrontComponent.prototype.ngOnInit = function () {
    };
    return FrontComponent;
}());
FrontComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-front',
        template: __webpack_require__(381),
        styles: [__webpack_require__(354)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */]) === "function" && _a || Object])
], FrontComponent);

var _a;
//# sourceMappingURL=front.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(dataService, toast) {
        this.dataService = dataService;
        this.toast = toast;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(382),
        styles: [__webpack_require__(355)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_user_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(http, dataService, userService, toast, formBuilder, router) {
        this.http = http;
        this.dataService = dataService;
        this.userService = userService;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.router = router;
        this.user = {};
        this.isEditing = false;
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: this.email,
            password: this.password,
        });
        this.userService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.dataService.login(this.loginForm.value).subscribe(function (res) {
            var response = res.json();
            // this.loginForm.reset();
            // console.log(JSON.stringify(response));
            if (response.error) {
                _this.toast.setMessage(response.message, 'danger');
            }
            else {
                _this.userService.login(response);
                _this.toast.setMessage(response.message, 'success');
                if (_this.userService.isUserAStudent()) {
                    _this.router.navigate(['student']);
                }
                else if (_this.userService.isUserALecturer()) {
                    _this.router.navigate(['lecturer']);
                }
                else if (_this.userService.isUserAnAdmin()) {
                    _this.router.navigate(['admin']);
                }
            }
        }, (function (error) {
            console.log(error);
            _this.toast.setMessage(error, 'danger');
        }));
    };
    LoginComponent.prototype.enableEditing = function (user) {
        this.isEditing = true;
        this.user = user;
    };
    LoginComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.user = {};
        this.toast.setMessage('item editing cancelled.', 'warning');
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(383),
        styles: [__webpack_require__(356)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_user_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_toast_toast_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(http, router, dataService, toast) {
        this.http = http;
        this.router = router;
        this.dataService = dataService;
        this.toast = toast;
        /* standing data goes here*/
        this.genders = [
            { value: 'F', display: 'Female' },
            { value: 'M', display: 'Male' }
        ];
        this.titles = [
            { value: 'Prof.', display: 'Prof.' },
            { value: 'Dr.', display: 'Dr.' },
            { value: 'Mr.', display: 'Mr.' },
            { value: 'Mrs.', display: 'Mrs.' },
            { value: 'Miss', display: 'Miss' }
        ];
        this.specializations = [
            { value: 'Control and Instrumentation', display: 'Control and Instrumentation' },
            { value: 'Power', display: 'Power' },
            { value: 'Solid State', display: 'Solid State' },
            { value: 'Communications', display: 'Communications' }
        ];
        this.roles = [
            { value: 'Student', display: 'Student' },
            { value: 'Lecturer', display: 'Lecturer' },
        ];
    }
    RegisterComponent.prototype.ngOnInit = function () {
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
        this.isStudent = this.user.role === this.roles[0].value;
    };
    RegisterComponent.prototype.register = function (user) {
        var _this = this;
        console.log(user);
        this.dataService.register(user).subscribe(function (res) {
            var response = res.json();
            _this.toast.setMessage(response.message, 'success');
            _this.router.navigate(['login']);
        }, function (error) { return console.log(error); });
    };
    RegisterComponent.prototype.setRole = function () {
        this.isStudent = this.user.role === this.roles[0].value;
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__(384),
        styles: [__webpack_require__(357)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LecturerComponent = (function () {
    function LecturerComponent(userService, dateService) {
        this.userService = userService;
        this.dateService = dateService;
    }
    LecturerComponent.prototype.ngOnInit = function () {
    };
    return LecturerComponent;
}());
LecturerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-lecturer',
        template: __webpack_require__(385),
        styles: [__webpack_require__(358)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], LecturerComponent);

var _a, _b;
//# sourceMappingURL=lecturer.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(userService, toast) {
        this.userService = userService;
        this.toast = toast;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getUserDetails();
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__(387),
        styles: [__webpack_require__(360)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentComponent = (function () {
    function StudentComponent(userService) {
        this.userService = userService;
    }
    StudentComponent.prototype.ngOnInit = function () {
    };
    return StudentComponent;
}());
StudentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-student',
        template: __webpack_require__(388),
        styles: [__webpack_require__(361)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */]) === "function" && _a || Object])
], StudentComponent);

var _a;
//# sourceMappingURL=student.component.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastComponent = (function () {
    function ToastComponent() {
        this.message = { body: '', type: '' };
    }
    ToastComponent.prototype.setMessage = function (body, type, time) {
        var _this = this;
        if (time === void 0) { time = 3000; }
        this.message.body = body;
        this.message.type = type;
        setTimeout(function () { _this.message.body = ''; }, time);
    };
    return ToastComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], ToastComponent.prototype, "message", void 0);
ToastComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-toast',
        template: __webpack_require__(386),
        styles: [__webpack_require__(359)]
    })
], ToastComponent);

//# sourceMappingURL=toast.component.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    DataService.prototype.getLecturers = function () {
        return this.http.get('/api/lecturers').map(function (res) { return res.json(); });
    };
    DataService.prototype.getLecturer = function (lecturer_id) {
        return this.http.get("/api/lecturer/" + lecturer_id).map(function (res) { return res.json(); });
    };
    DataService.prototype.deleteLecturer = function (lecturer) {
        return this.http.delete("/api/lecturer/" + lecturer._id, this.options);
    };
    DataService.prototype.getStudents = function () {
        return this.http.get('/api/students').map(function (res) { return res.json(); });
    };
    DataService.prototype.getStudent = function (student_id) {
        return this.http.get("/api/student/" + student_id).map(function (res) { return res.json(); });
    };
    DataService.prototype.deleteStudent = function (student) {
        return this.http.delete("/api/student/" + student._id, this.options);
    };
    DataService.prototype.addCourse = function (course) {
        return this.http.post('/api/course', JSON.stringify(course), this.options);
    };
    DataService.prototype.getCourses = function () {
        return this.http.get('/api/courses').map(function (res) { return res.json(); });
    };
    DataService.prototype.getCoursesForLecturer = function (lecturer_id) {
        return this.http.get("/api/courses/" + lecturer_id).map(function (res) { return res.json(); });
    };
    DataService.prototype.getCourse = function (course_id) {
        return this.http.get("/api/course/" + course_id).map(function (res) { return res.json(); });
    };
    DataService.prototype.editCourse = function (course) {
        return this.http.put("/api/course/" + course._id, JSON.stringify(course), this.options);
    };
    DataService.prototype.deleteCourse = function (course) {
        return this.http.delete("/api/course/" + course._id, this.options);
    };
    DataService.prototype.login = function (user) {
        return this.http.post('/api/login', JSON.stringify(user), this.options);
    };
    DataService.prototype.register = function (user) {
        return this.http.post('/api/register', JSON.stringify(user), this.options);
    };
    DataService.prototype.getLectures = function (course_id) {
        return this.http.get("/api/lectures_/" + course_id).map(function (res) { return res.json(); });
    };
    DataService.prototype.editLecture = function (lecture) {
        return this.http.put("/api/lecture_/" + lecture._id, JSON.stringify(lecture), this.options);
    };
    DataService.prototype.deleteLecture = function (lecture) {
        return this.http.delete("/api/lecture/" + lecture._id, this.options);
    };
    DataService.prototype.getLecture = function (lecture_id) {
        return this.http.get("/api/lecture/" + lecture_id).map(function (res) { return res.json(); });
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 164;


/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(189);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__students_students_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_logged_in_guard__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commons_courses_courses_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lecturers_lecturers_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lon on 12/3/16.
 */







var adminRoutes = [
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_3__admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__services_logged_in_guard__["a" /* LoggedInGuard */]], children: [
            { path: '', redirectTo: 'courses', pathMatch: 'full' },
            { path: 'students', component: __WEBPACK_IMPORTED_MODULE_2__students_students_component__["a" /* StudentsComponent */] },
            { path: 'lecturers', component: __WEBPACK_IMPORTED_MODULE_6__lecturers_lecturers_component__["a" /* LecturersComponent */] },
            { path: 'courses', component: __WEBPACK_IMPORTED_MODULE_5__commons_courses_courses_component__["a" /* CoursesComponent */] },
        ] },
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(adminRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AdminRoutingModule);

//# sourceMappingURL=admin-routing.module.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__students_students_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_routing_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_global_module__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__commons_commons_module__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lecturers_lecturers_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__global_global_module__["a" /* GlobalModule */],
            __WEBPACK_IMPORTED_MODULE_4__admin_routing_module__["a" /* AdminRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__commons_commons_module__["a" /* CommonsModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_3__students_students_component__["a" /* StudentsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__lecturers_lecturers_component__["a" /* LecturersComponent */]
        ],
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(373),
        styles: [__webpack_require__(346)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_toast_toast_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__commons_courses_courses_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__front_front_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_user_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__global_global_module__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__student_student_module__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_logged_in_guard__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__commons_commons_module__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lecturer_lecturer_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__wildcard_routing_wildcard_routing_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_admin_module__ = __webpack_require__(176);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routing = __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
    { path: 'courses', component: __WEBPACK_IMPORTED_MODULE_8__commons_courses_courses_component__["a" /* CoursesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_logged_in_guard__["a" /* LoggedInGuard */]] },
]);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            routing,
            __WEBPACK_IMPORTED_MODULE_12__global_global_module__["a" /* GlobalModule */],
            __WEBPACK_IMPORTED_MODULE_9__front_front_module__["a" /* FrontModule */],
            __WEBPACK_IMPORTED_MODULE_13__student_student_module__["a" /* StudentModule */],
            __WEBPACK_IMPORTED_MODULE_16__lecturer_lecturer_module__["a" /* LecturerModule */],
            __WEBPACK_IMPORTED_MODULE_18__admin_admin_module__["a" /* AdminModule */],
            __WEBPACK_IMPORTED_MODULE_15__commons_commons_module__["a" /* CommonsModule */],
            __WEBPACK_IMPORTED_MODULE_17__wildcard_routing_wildcard_routing_module__["a" /* WildcardRoutingModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_11__services_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__shared_toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_14__services_logged_in_guard__["a" /* LoggedInGuard */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_course_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lecturer_lecturer_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_student_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lectures_lectures_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lecture_lecture_component__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lon on 12/3/16.
 */







var commonsRoutes = [
    { path: 'common/course/:id', component: __WEBPACK_IMPORTED_MODULE_2__course_course_component__["a" /* CourseComponent */] },
    { path: 'common/lecturer/:id', component: __WEBPACK_IMPORTED_MODULE_3__lecturer_lecturer_component__["a" /* LecturerComponent */] },
    { path: 'common/student/:id', component: __WEBPACK_IMPORTED_MODULE_4__student_student_component__["a" /* StudentComponent */] },
    { path: 'common/lectures/:id', component: __WEBPACK_IMPORTED_MODULE_5__lectures_lectures_component__["a" /* LecturesComponent */] },
    { path: 'common/lecture/:id', component: __WEBPACK_IMPORTED_MODULE_6__lecture_lecture_component__["a" /* LectureComponent */] },
];
var CommonsRoutingModule = (function () {
    function CommonsRoutingModule() {
    }
    return CommonsRoutingModule;
}());
CommonsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(commonsRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], CommonsRoutingModule);

//# sourceMappingURL=commons-routing.module.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__front_component__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lon on 12/3/16.
 */







var heroesRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__front_component__["a" /* FrontComponent */],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
        ]
    }
];
var FrontRoutingModule = (function () {
    function FrontRoutingModule() {
    }
    return FrontRoutingModule;
}());
FrontRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(heroesRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], FrontRoutingModule);

//# sourceMappingURL=front-routing.module.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_equal_validator_directive__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__front_routing_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global_global_module__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__front_component__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lon on 12/3/16.
 */











var FrontModule = (function () {
    function FrontModule() {
    }
    return FrontModule;
}());
FrontModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__front_routing_module__["a" /* FrontRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__global_global_module__["a" /* GlobalModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__front_component__["a" /* FrontComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_3__services_equal_validator_directive__["a" /* EqualValidatorDirective */],
        ],
        providers: [],
        exports: []
    })
], FrontModule);

//# sourceMappingURL=front.module.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lecturer_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_courses_courses_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_logged_in_guard__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturerRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lon on 12/3/16.
 */





var lecturerRoutes = [
    { path: 'lecturer', component: __WEBPACK_IMPORTED_MODULE_2__lecturer_component__["a" /* LecturerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__services_logged_in_guard__["a" /* LoggedInGuard */]], children: [
            { path: '', redirectTo: 'courses', pathMatch: 'full' },
            { path: 'courses', component: __WEBPACK_IMPORTED_MODULE_3__commons_courses_courses_component__["a" /* CoursesComponent */] },
        ] },
];
var LecturerRoutingModule = (function () {
    function LecturerRoutingModule() {
    }
    return LecturerRoutingModule;
}());
LecturerRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(lecturerRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], LecturerRoutingModule);

//# sourceMappingURL=lecturer-routing.module.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lecturer_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_global_module__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lecturer_routing_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commons_commons_module__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LecturerModule = (function () {
    function LecturerModule() {
    }
    return LecturerModule;
}());
LecturerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__global_global_module__["a" /* GlobalModule */],
            __WEBPACK_IMPORTED_MODULE_5__lecturer_routing_module__["a" /* LecturerRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__commons_commons_module__["a" /* CommonsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__lecturer_component__["a" /* LecturerComponent */]]
    })
], LecturerModule);

//# sourceMappingURL=lecturer.module.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by lon on 11/16/16.
 */


var EqualValidatorDirective = EqualValidatorDirective_1 = (function () {
    function EqualValidatorDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidatorDirective.prototype, "isReverse", {
        get: function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidatorDirective.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        }
        return null;
    };
    return EqualValidatorDirective;
}());
EqualValidatorDirective = EqualValidatorDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Directive */])({
        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* forwardRef */])(function () { return EqualValidatorDirective_1; }), multi: true }
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Attribute */])('validateEqual')),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Attribute */])('reverse')),
    __metadata("design:paramtypes", [String, String])
], EqualValidatorDirective);

var EqualValidatorDirective_1;
//# sourceMappingURL=equal-validator.directive.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_logged_in_guard__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commons_courses_courses_component__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lon on 12/3/16.
 */






var studentRoutes = [
    { path: 'student', component: __WEBPACK_IMPORTED_MODULE_4__student_component__["a" /* StudentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__services_logged_in_guard__["a" /* LoggedInGuard */]], children: [
            { path: '', redirectTo: 'courses', pathMatch: 'full' },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__["a" /* ProfileComponent */], },
            { path: 'courses', component: __WEBPACK_IMPORTED_MODULE_5__commons_courses_courses_component__["a" /* CoursesComponent */] },
        ] },
];
var StudentRoutingModule = (function () {
    function StudentRoutingModule() {
    }
    return StudentRoutingModule;
}());
StudentRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(studentRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], StudentRoutingModule);

//# sourceMappingURL=student-routing.module.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_routing_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_global_module__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__commons_commons_module__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var StudentModule = (function () {
    function StudentModule() {
    }
    return StudentModule;
}());
StudentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__student_routing_module__["a" /* StudentRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__global_global_module__["a" /* GlobalModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__commons_commons_module__["a" /* CommonsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__student_component__["a" /* StudentComponent */],
            __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__["a" /* ProfileComponent */],
        ]
    })
], StudentModule);

//# sourceMappingURL=student.module.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = (function () {
    function PageNotFoundComponent(toast) {
        this.toast = toast;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__(389),
        styles: [__webpack_require__(362)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _a || Object])
], PageNotFoundComponent);

var _a;
//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_global_module__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WildcardRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WildcardRoutingModule = (function () {
    function WildcardRoutingModule() {
    }
    return WildcardRoutingModule;
}());
WildcardRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__global_global_module__["a" /* GlobalModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild([
                {
                    path: '**',
                    component: __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
                }
            ])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]
        ]
    })
], WildcardRoutingModule);

//# sourceMappingURL=wildcard-routing.module.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_toast_toast_component__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GlobalModule = (function () {
    function GlobalModule() {
    }
    return GlobalModule;
}());
GlobalModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__shared_toast_toast_component__["a" /* ToastComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_toast_toast_component__["a" /* ToastComponent */]
        ]
    })
], GlobalModule);

//# sourceMappingURL=global.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".table td, .table th {\n    text-align: center;\n    width: 18%;\n}\n\n.card{\n    margin-top: 2em;\n    margin-bottom: 1.5em;\n}\n\n.table td.actions, .table th.actions {\n    text-align: center;\n    width: 10%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".table td, .table th {\n    text-align: center;\n    width: 18%;\n}\n\n.card{\n    margin-top: 2em;\n    margin-bottom: 1.5em;\n}\n\n.table td.actions, .table th.actions {\n    text-align: center;\n    width: 10%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".user-row {\n    margin-bottom: 14px;\n}\n\n.user-row:last-child {\n    margin-bottom: 0;\n}\n\n.dropdown-user {\n    margin: 13px 0;\n    padding: 5px;\n    height: 100%;\n}\n\n.dropdown-user:hover {\n    cursor: pointer;\n}\n\n.table-user-information > tbody > tr {\n    border-top: 1px solid rgb(221, 221, 221);\n}\n\n.table-user-information > tbody > tr:first-child {\n    border-top: 0;\n}\n\n\n.table-user-information > tbody > tr > td {\n    border-top: 0;\n}\n.toppad\n{margin-top:20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".table td, .table th {\n    text-align: center;\n    width: 15%;\n}\n\n.card{\n    margin-top: 2em;\n    margin-bottom: 1.5em;\n}\n\n.table td.actions, .table th.actions {\n    text-align: center;\n    width: 10%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".user-row {\n    margin-bottom: 14px;\n}\n\n.user-row:last-child {\n    margin-bottom: 0;\n}\n\n.dropdown-user {\n    margin: 13px 0;\n    padding: 5px;\n    height: 100%;\n}\n\n.dropdown-user:hover {\n    cursor: pointer;\n}\n\n.table-user-information > tbody > tr {\n    border-top: 1px solid rgb(221, 221, 221);\n}\n\n.table-user-information > tbody > tr:first-child {\n    border-top: 0;\n}\n\n\n.table-user-information > tbody > tr > td {\n    border-top: 0;\n}\n.toppad\n{margin-top:20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".user-row {\n    margin-bottom: 14px;\n}\n\n.user-row:last-child {\n    margin-bottom: 0;\n}\n\n.dropdown-user {\n    margin: 13px 0;\n    padding: 5px;\n    height: 100%;\n}\n\n.dropdown-user:hover {\n    cursor: pointer;\n}\n\n.table-user-information > tbody > tr {\n    border-top: 1px solid rgb(221, 221, 221);\n}\n\n.table-user-information > tbody > tr:first-child {\n    border-top: 0;\n}\n\n\n.table-user-information > tbody > tr > td {\n    border-top: 0;\n}\n.toppad\n{margin-top:20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".table td, .table th {\n    text-align: center;\n    width: 15%;\n}\n\n.card{\n    margin-top: 2em;\n    margin-bottom: 1.5em;\n}\n\n.table td.actions, .table th.actions {\n    text-align: center;\n    width: 10%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".user-row {\n    margin-bottom: 14px;\n}\n\n.user-row:last-child {\n    margin-bottom: 0;\n}\n\n.dropdown-user {\n    margin: 13px 0;\n    padding: 5px;\n    height: 100%;\n}\n\n.dropdown-user:hover {\n    cursor: pointer;\n}\n\n.table-user-information > tbody > tr {\n    border-top: 1px solid rgb(221, 221, 221);\n}\n\n.table-user-information > tbody > tr:first-child {\n    border-top: 0;\n}\n\n\n.table-user-information > tbody > tr > td {\n    border-top: 0;\n}\n.toppad\n{margin-top:20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".alert {\n\tz-index: 999;\n\tposition: fixed;\n\tbottom: 15px;\n\tleft: 25%;\n\twidth: 50%;\n\topacity: 0.9;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".user-row {\n    margin-bottom: 14px;\n}\n\n.user-row:last-child {\n    margin-bottom: 0;\n}\n\n.dropdown-user {\n    margin: 13px 0;\n    padding: 5px;\n    height: 100%;\n}\n\n.dropdown-user:hover {\n    cursor: pointer;\n}\n\n.table-user-information > tbody > tr {\n    border-top: 1px solid rgb(221, 221, 221);\n}\n\n.table-user-information > tbody > tr:first-child {\n    border-top: 0;\n}\n\n\n.table-user-information > tbody > tr > td {\n    border-top: 0;\n}\n.toppad\n{margin-top:20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-full navbar-dark navbar-custom\">\n  <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNavbarCollapse\">\n    &#9776;\n  </button>\n  <a routerLink=\"/home\" class=\"navbar-brand\">\n    Class Attendance System\n  </a>\n  <div class=\"collapse navbar-toggleable-md\" id=\"mainNavbarCollapse\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\">\n        <a routerLink=\"/home\" class=\"nav-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" >Home</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserAnAdmin()\">\n        <a routerLink=\"/admin/courses\" class=\"nav-link\" routerLinkActive=\"active\">\n          Courses\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserAnAdmin()\" >\n        <a routerLink=\"/admin/students\" class=\"nav-link\" routerLinkActive=\"active\">\n          Students\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserAnAdmin()\" >\n        <a routerLink=\"/admin/lecturers\" class=\"nav-link\" routerLinkActive=\"active\">\n          Lecturers\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isLoggedIn()\">\n        <a routerLink=\"/login\" class=\"nav-link\" routerLinkActive=\"active\">\n          Logout\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 371:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isLoading\">\n  <h4 class=\"card-header\">Loading...</h4>\n  <div class=\"card-block text-xs-center\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n  </div>\n</div>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"container\">\n  <div class=\"card\" *ngIf=\"!isLoading\">\n    <h4 class=\"card-header\">All lecturers ({{lecturers.length}})</h4>\n    <div class=\"card-block\">\n      <table class=\"table table-bordered table-hover table-responsive\">\n        <thead class=\"thead-inverse\">\n        <tr>\n          <th>Fullname</th>\n          <th>Email</th>\n          <th>Specialization</th>\n          <th>Courses</th>\n          <th class=\"actions\" *ngIf=\"isUserAdmin\">Actions</th>\n        </tr>\n        </thead>\n        <tbody *ngIf=\"lecturers.length === 0\">\n        <tr>\n          <td colspan=\"3\">There are no lecturers in the DB</td>\n        </tr>\n        </tbody>\n        <tbody *ngIf=\"!isEditing\">\n        <tr *ngFor=\"let lecturer of lecturers; let i = index\">\n          <td><a [routerLink]=\"['/common/lecturer', lecturer?._id]\">{{lecturer?.title}} {{lecturer?.name?.first}} {{lecturer?.name?.middle}} {{lecturer?.name?.last}}</a>\n            </td>\n          <td>{{lecturer.email}}</td>\n          <td>{{lecturer.specialization}}</td>\n          <td><small *ngFor=\"let course of lecturer?.courses\"><a [routerLink]=\"['/common/course',course._id]\">{{course.code}}</a> </small></td>\n          <td *ngIf=\"isUserAdmin\" class=\"actions\">\n            <button #del id=\"del{{i}}\" class=\"btn btn-sm btn-success\"  (click)=\"deleteLecturer(lecturer, i)\"><em class=\"fa fa-trash\"></em></button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isLoading\">\n  <h4 class=\"card-header\">Loading...</h4>\n  <div class=\"card-block text-xs-center\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n  </div>\n</div>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"container\">\n  <div class=\"card\" *ngIf=\"!isLoading\">\n    <h4 class=\"card-header\">All students ({{students.length}})</h4>\n    <div class=\"card-block\">\n      <table class=\"table table-bordered table-hover table-responsive\">\n        <thead class=\"thead-inverse\">\n        <tr>\n          <th>Fullname</th>\n          <th>Email</th>\n          <th>Matric Number</th>\n          <th>RFID UID</th>\n          <th>Level</th>\n          <th>Courses</th>\n          <th class=\"actions\" *ngIf=\"isUserAdmin\">Actions</th>\n        </tr>\n        </thead>\n        <tbody *ngIf=\"students.length === 0\">\n        <tr>\n          <td colspan=\"3\">There are no students in the DB</td>\n        </tr>\n        </tbody>\n        <tbody *ngIf=\"!isEditing\">\n        <tr *ngFor=\"let student of students; let i = index\">\n          <td><a [routerLink]=\"['/common/student', student?._id]\">{{student?.name?.first}} {{student?.name?.middle}} {{student?.name?.last}}</a></td>\n          <td>{{student?.email}}</td>\n          <td>{{student?.matric_no}}</td>\n          <td>{{student?.rfid_uid}}</td>\n          <td>{{student?.level}}</td>\n          <td><small *ngFor=\"let course of student?.courses\"><a [routerLink]=\"['/common/course',course._id]\">{{course.code}}</a> </small></td>\n          <td *ngIf=\"isUserAdmin\" class=\"actions\">\n            <button #del id=\"del{{i}}\" class=\"btn btn-sm btn-success\"  (click)=\"deleteStudent(student, i)\"><em class=\"fa fa-trash\"></em></button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 373:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">-->\n\n<!--&lt;!&ndash; .navbar &ndash;&gt;-->\n\n<!-- /.navbar -->\n\n  <!--&lt;!&ndash; Navigation &ndash;&gt;-->\n  <!--<nav id=\"mainNav\" class=\"navbar navbar-default navbar-fixed-top navbar-custom\">-->\n    <!--<div class=\"container\">-->\n      <!--&lt;!&ndash; Brand and toggle get grouped for better mobile display &ndash;&gt;-->\n      <!--<div class=\"navbar-header page-scroll\">-->\n        <!--&lt;!&ndash;<a class=\"navbar-brand\" href=\"#page-top\">Class Attendance System</a>&ndash;&gt;-->\n        <!--<a routerLink=\"/home\" class=\"nav-item nav-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">-->\n          <!--<i class=\"fa fa-home\"></i> Class Attendance System-->\n        <!--</a>-->\n\n        <!--<ul class=\"nav navbar-nav navbar-right\">-->\n          <!--<li class=\"hidden\">-->\n            <!--&lt;!&ndash;<a routerLink=\"/home\" class=\"nav-item nav-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">&ndash;&gt;-->\n            <!--&lt;!&ndash;<i class=\"fa fa-home\"></i> Home&ndash;&gt;-->\n            <!--&lt;!&ndash;</a>&ndash;&gt;-->\n            <!--<a ></a>-->\n          <!--</li>-->\n          <!--<li>-->\n            <!--<a routerLink=\"/about\" class=\"nav-item nav-link\" routerLinkActive=\"active\">-->\n              <!--<i class=\"fa fa-info-circle\"></i> About-->\n            <!--</a>-->\n          <!--</li>-->\n          <!--<li *ngIf=\"this.userService.isUserALecturer()\">-->\n            <!--<a routerLink=\"/courses\" class=\"nav-item nav-link\" routerLinkActive=\"active\">-->\n              <!--<i class=\"fa fa-info-circle\"></i> Courses-->\n            <!--</a>-->\n          <!--</li>-->\n          <!--<li *ngIf=\"this.userService.isUserAStudent()\" >-->\n            <!--<a routerLink=\"/profile\" class=\"nav-item nav-link\" routerLinkActive=\"active\">-->\n              <!--<i class=\"fa fa-info-circle\"></i> Profile-->\n            <!--</a>-->\n          <!--</li>-->\n          <!--<li *ngIf=\"!this.userService.isLoggedIn()\">-->\n            <!--<a routerLink=\"/login\"  class=\"nav-item nav-link\" routerLinkActive=\"active\">-->\n              <!--<i class=\"fa fa-info-circle\"></i> Login-->\n            <!--</a>-->\n          <!--</li>-->\n          <!--<li *ngIf=\"this.userService.isLoggedIn()\">-->\n            <!--<a routerLink=\"/login\" class=\"nav-item nav-link\" routerLinkActive=\"active\">-->\n              <!--<i class=\"fa fa-info-circle\"></i> Logout-->\n            <!--</a>-->\n          <!--</li>-->\n          <!--<li *ngIf=\"!this.userService.isLoggedIn()\">-->\n            <!--<a routerLink=\"/register\" class=\"nav-item nav-link\" routerLinkActive=\"active\">-->\n              <!--<i class=\"fa fa-info-circle\"></i> Register-->\n            <!--</a>-->\n          <!--</li>-->\n        <!--</ul>-->\n\n      <!--</div>-->\n\n\n\n      <!--&lt;!&ndash; Collect the nav links, forms, and other content for toggling &ndash;&gt;-->\n      <!--&lt;!&ndash;<div class=\"\" >&ndash;&gt;-->\n\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\n      <!--&lt;!&ndash; /.navbar-collapse &ndash;&gt;-->\n    <!--</div>-->\n    <!--&lt;!&ndash; /.container-fluid &ndash;&gt;-->\n  <!--</nav>-->\n\n<!--<nav class=\"navbar navbar-default bg-primary\">-->\n  <!--<div class=\"nav navbar-nav\">-->\n    <!--<a routerLink=\"/home\" class=\"nav-item nav-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">-->\n      <!--<i class=\"fa fa-home\"></i> Home-->\n    <!--</a>-->\n    <!--<a routerLink=\"/about\" class=\"nav-item nav-link\" routerLinkActive=\"active\">-->\n      <!--<i class=\"fa fa-info-circle\"></i> About-->\n    <!--</a>-->\n    <!--<a routerLink=\"/courses\" *ngIf=\"this.userService.isUserALecturer()\" class=\"nav-item nav-link\" routerLinkActive=\"active\">-->\n      <!--<i class=\"fa fa-info-circle\"></i> Courses-->\n    <!--</a>-->\n    <!--<a routerLink=\"/profile\" *ngIf=\"this.userService.isUserAStudent()\" class=\"nav-item nav-link\" routerLinkActive=\"active\">-->\n      <!--<i class=\"fa fa-info-circle\"></i> Profile-->\n    <!--</a>-->\n    <!--<a routerLink=\"/login\" *ngIf=\"!this.userService.isLoggedIn()\" class=\"nav-item nav-link\" routerLinkActive=\"active\">-->\n      <!--<i class=\"fa fa-info-circle\"></i> Login-->\n    <!--</a>-->\n    <!--<a routerLink=\"/login\" *ngIf=\"this.userService.isLoggedIn()\" class=\"nav-item nav-link\" routerLinkActive=\"active\">-->\n      <!--<i class=\"fa fa-info-circle\"></i> Logout-->\n    <!--</a>-->\n    <!--<a routerLink=\"/register\" *ngIf=\"!this.userService.isLoggedIn()\" class=\"nav-item nav-link\" routerLinkActive=\"active\">-->\n      <!--<i class=\"fa fa-info-circle\"></i> Register-->\n    <!--</a>-->\n  <!--</div>-->\n<!--</nav>-->\n\n  <router-outlet></router-outlet>\n\n\n\n<!--</div>-->"

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isLoading\">\n  <h4 class=\"card-header\">Loading...</h4>\n  <div class=\"card-block text-xs-center\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n  </div>\n</div>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<nav *ngIf=\"!isLoading\" class=\"navbar navbar-full navbar-dark navbar-custom\">\n  <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNavbarCollapse\">\n    &#9776;\n  </button>\n  <a routerLink=\"/home\" class=\"navbar-brand\">\n    Class Attendance System\n  </a>\n  <div class=\"collapse navbar-toggleable-md\" id=\"mainNavbarCollapse\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\">\n        <a routerLink=\"/home\" class=\"nav-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" >Home</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserAnAdmin()\">\n        <a routerLink=\"/admin\" class=\"nav-link\" routerLinkActive=\"active\">\n          Admin\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserALecturer()\">\n        <a routerLink=\"/lecturer\" class=\"nav-link\" routerLinkActive=\"active\">\n          Dashboard\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserAStudent()\">\n        <a routerLink=\"/student\" class=\"nav-link\" routerLinkActive=\"active\">\n          Dashboard\n        </a>\n      </li>\n      <li class=\"nav-item\" >\n        <a [routerLink]=\"['/course',course_id]\" class=\"nav-link\" routerLinkActive=\"active\">\n          {{course?.code}}\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div *ngIf=\"!isLoading\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 toppad\" >\n      <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">{{course?.title}}</h3>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-3\" align=\"center\"> <img alt=\"Course Avatar\" [src]=\"course?.grav_url\" class=\"img-circle img-responsive\"> </div>\n            <!--<div class=\"col-md-3\" align=\"center\"> <span class=\"fa fa-\"> </div>-->\n            <div class=\" col-md-9\">\n              <table class=\"table table-course-information\">\n                <tbody>\n                <tr>\n                  <td>Code:</td>\n                  <td>{{course?.code}}</td>\n                </tr>\n                <tr>\n                  <td>About</td>\n                  <td>{{course?.about?.bio}}</td>\n                </tr>\n                <tr>\n                  <td>Units</td>\n                  <td>{{course?.units}}</td>\n                </tr>\n                <tr>\n                  <td>Level</td>\n                  <td>{{course?.level}}</td>\n                </tr>\n                <tr>\n                  <td>Coordinator</td>\n                  <td><a [routerLink]=\"['/common/lecturer', course?.coordinator?._id]\">{{course?.coordinator?.title}} {{course?.coordinator?.name?.first}} {{course?.coordinator?.name?.last}}</a></td>\n                </tr>\n                <tr>\n                  <td>Registered Students</td>\n                  <td><small *ngFor=\"let student of course?.students\"><a [routerLink]=\"['/common/student', student?._id]\">{{student?.name?.first}} {{student?.name?.middle}} {{student?.name?.last}}</a> </small></td>\n                </tr>\n                <tr>\n                  <td>Lectures</td>\n                  <td> <a [routerLink]=\"['/common/lectures', course?._id]\">View All</a> </td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel-footer\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isLoading\">\n    <h4 class=\"card-header\">Loading...</h4>\n    <div class=\"card-block text-xs-center\">\n        <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n    </div>\n</div>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"container\">\n    <div class=\"card\" *ngIf=\"!isLoading\">\n        <h4 class=\"card-header\">All courses ({{courses.length}})</h4>\n        <div class=\"card-block\">\n            <table class=\"table table-bordered table-hover table-responsive\">\n                <thead class=\"thead-inverse\">\n                <tr>\n                    <th>Title</th>\n                    <th>Code</th>\n                    <th>Units</th>\n                    <th>Level</th>\n                    <th>Description</th>\n                    <th>Coordinator</th>\n                    <th class=\"actions\" *ngIf=\"isUserAdmin || isUserStudent\">Actions</th>\n                </tr>\n                </thead>\n                <tbody *ngIf=\"courses.length === 0\">\n                <tr>\n                    <td colspan=\"3\" *ngIf=\"isUserAdmin\">There are no courses in the Database. Add a new course below.</td>\n                    <td colspan=\"3\" *ngIf=\"!isUserAdmin\">There are no courses in the Database</td>\n                </tr>\n                </tbody>\n                <tbody *ngIf=\"!isEditing\">\n                <tr *ngFor=\"let course of courses; let i = index\" [style.background-color]=\"getStyle(course)\">\n                    <td><a [routerLink]=\"['/common/course',course._id]\">{{course.title}}</a></td>\n                    <td>{{course.code}}</td>\n                    <td>{{course.units}}</td>\n                    <td>{{course.level}}</td>\n                    <td>{{course?.about?.bio}}</td>\n                    <td><a [routerLink]=\"['/common/lecturer',course?.coordinator?._id]\">{{course?.coordinator?.title}} {{course?.coordinator?.name?.first}} {{course?.coordinator?.name?.last}}</a></td>\n                    <td *ngIf=\"isUserAdmin\" class=\"actions\">\n                        <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(course)\"><em class=\"fa fa-pencil\"></em></button>\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"deleteCourse(course)\"><em class=\"fa fa-trash\"></em></button>\n                    </td>\n                    <td *ngIf=\"isUserStudent\" class=\"actions\">\n                        <button *ngIf=\"!isStudentRegistered(course)\" #reg id=\"reg{{i}}\" class=\"btn btn-sm btn-success\"  (click)=\"registerCourse(course, i)\"><em class=\"fa fa-check-square-o\"></em></button>\n                        <button *ngIf=\"isStudentRegistered(course)\" #reg id=\"reg{{i}}\" class=\"btn btn-sm btn-danger\"  (click)=\"unregisterCourse(course, i)\"><em class=\"fa fa-trash\"></em></button>\n                    </td>\n                </tr>\n                </tbody>\n                <tbody *ngIf=\"isUserAdmin && isEditing\">\n                <tr>\n                    <td colspan=\"7\">\n                        <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editCourse(course)\" style=\"display:inline\">\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" type=\"text\" name=\"title\" [(ngModel)]=\"course.title\" placeholder=\"Title\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" type=\"text\" name=\"code\" [(ngModel)]=\"course.code\" placeholder=\"Code\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" type=\"number\" name=\"units\" [(ngModel)]=\"course.units\" placeholder=\"Units\" min=\"1\" step=\"1\" max=\"5\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" type=\"number\" id=\"level\" name=\"level\" [(ngModel)]=\"course.level\" placeholder=\"Level\" step=\"100\" min=\"100\" max=\"500\" required>\n                            </div>\n                            <div class=\"form-group\" >\n                                <select name=\"coordinator\" [(ngModel)]=\"course.coordinator\"  required>\n                                    <option *ngFor=\"let lecturer of lecturers\" [ngValue]=\"lecturer._id\">\n                                        {{lecturer?.title}} {{lecturer?.name?.first}} {{lecturer?.name?.last}}\n                                    </option>\n                                </select>\n                            </div>\n                            <div class=\"form-group\">\n                                <textarea class=\"form-control\" name=\"about\" [(ngModel)]=\"course.about.bio\" placeholder=\"Short Description\" required></textarea>\n                            </div>\n                            <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n                            <!--<div class=\"col-sm-12\" style=\"margin-top: 20px\" *ngIf=\"form\">-->\n                            <!--<div>Form details:-</div>-->\n                            <!--<pre>Is form valid?: <br>{{form.valid | json}}</pre>-->\n                            <!--<pre>Is form submitted?: <br>{{form.submitted | json}}</pre>-->\n                            <!--<pre>submitted value: <br>{{form.value | json}}</pre>-->\n                            <!--</div>-->\n                        </form>\n                        <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\"><i class=\"fa fa-times\"></i> Cancel</button>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n    <div class=\"card\" *ngIf=\"!isLoading && isUserAdmin && !isEditing\">\n        <h4 class=\"card-header\">Add new course</h4>\n        <div class=\"card-block\">\n            <form class=\"form-inline\" [formGroup]=\"addCourseForm\" (ngSubmit)=\"addCourse()\" style=\"text-align:center\">\n                <div class=\"form-group\">\n                    <input class=\"form-control\" type=\"text\" name=\"title\" formControlName=\"title\" placeholder=\"Title\">\n                </div>\n                <div class=\"form-group\">\n                    <input class=\"form-control\" type=\"text\" name=\"code\" formControlName=\"code\" placeholder=\"Code\" required>\n                </div>\n                <div class=\"form-group\">\n                    <input class=\"form-control\" type=\"number\" name=\"units\" formControlName=\"units\" placeholder=\"Units\" min=\"1\" step=\"1\" max=\"5\" required>\n                </div>\n                <div class=\"form-group\">\n                    <input class=\"form-control\" type=\"number\" name=\"level\" formControlName=\"level\" placeholder=\"Level\" step=\"100\" min=\"100\" max=\"500\">\n                </div>\n                <div class=\"form-group\">\n                    <select class=\"form-control\" id=\"coordinator\" name=\"coordinator\" formControlName=\"coordinator\"  required>\n                        <option *ngFor=\"let lecturer of lecturers\" [value]=\"lecturer._id\">\n                            {{lecturer?.title}} {{lecturer?.name?.first}} {{lecturer?.name?.last}}\n                        </option>\n                    </select>\n                </div>\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\" name=\"about\" formControlName=\"bio\" placeholder=\"Short Description\" required></textarea>\n                </div>\n                <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!addCourseForm.valid\"><i class=\"fa fa-floppy-o\"></i> Add</button>\n                <!--<div class=\"col-sm-12\" style=\"margin-top: 20px\" *ngIf=\"addCourseForm\">-->\n                <!--<div>Form details:-</div>-->\n                <!--<pre>Is form valid?: <br>{{addCourseForm.valid | json}}</pre>-->\n                <!--<pre>Is form submitted?: <br>{{addCourseForm.submitted | json}}</pre>-->\n                <!--<pre>submitted value: <br>{{addCourseForm.value | json}}</pre>-->\n                <!--</div>-->\n            </form>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isLoading\">\n  <h4 class=\"card-header\">Loading...</h4>\n  <div class=\"card-block text-xs-center\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n  </div>\n</div>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<nav *ngIf=\"!isLoading\" class=\"navbar navbar-full navbar-dark navbar-custom\">\n  <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNavbarCollapse\">\n    &#9776;\n  </button>\n  <a routerLink=\"/home\" class=\"navbar-brand\">\n    Class Attendance System\n  </a>\n  <div class=\"collapse navbar-toggleable-md\" id=\"mainNavbarCollapse\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\">\n        <a routerLink=\"/home\" class=\"nav-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" >Home</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserAnAdmin()\">\n        <a routerLink=\"/admin\" class=\"nav-link\" routerLinkActive=\"active\">\n          Admin\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserALecturer()\">\n        <a routerLink=\"/lecturer\" class=\"nav-link\" routerLinkActive=\"active\">\n          Dashboard\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserAStudent()\">\n        <a routerLink=\"/student\" class=\"nav-link\" routerLinkActive=\"active\">\n          Dashboard\n        </a>\n      </li>\n      <li class=\"nav-item\" >\n        <a [routerLink]=\"['/common/lecture',lecture_id]\" class=\"nav-link\" routerLinkActive=\"active\">\n          {{lecture?.topic}}\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div *ngIf=\"!isLoading\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 toppad\" >\n      <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">{{ lecture.course.title }} {{ lecture.topic }}</h3>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-3\" align=\"center\"> <img alt=\"User Pic\" [src]=\"lecture?.grav_url\" class=\"img-circle img-responsive\"> </div>\n            <!--<div class=\"col-md-3\" align=\"center\"> <span class=\"fa fa-\"> </div>-->\n            <div class=\" col-md-9\">\n              <table class=\"table table-lecture-information\">\n                <tbody>\n                <tr>\n                  <td>Topic:</td>\n                  <td>{{ lecture.topic }}</td>\n                </tr>\n                <tr>\n                  <td>Created:</td>\n                  <td>{{lecture.createdAt | date:'short'}}</td>\n                </tr>\n                <tr>\n                  <td>Last Updated</td>\n                  <td>{{lecture.updatedAt | date:'short' }}</td>\n                </tr>\n                <tr>\n                  <td>Course</td>\n                  <td><a [routerLink]=\"['/common/course',lecture?.course?._id]\">{{lecture?.course?.code}}</a></td>\n                </tr>\n                <tr>\n                    <td>Students</td>\n                    <td><small *ngFor=\"let student of lecture?.attendance\"><a [routerLink]=\"['/common/student', student?._id]\">{{student?.name?.first}} {{student?.name?.middle}} {{student?.name?.last}}</a> </small></td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel-footer\">\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isLoading\">\n  <h4 class=\"card-header\">Loading...</h4>\n  <div class=\"card-block text-xs-center\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n  </div>\n</div>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<nav *ngIf=\"!isLoading\" class=\"navbar navbar-full navbar-dark navbar-custom\">\n  <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNavbarCollapse\">\n    &#9776;\n  </button>\n  <a routerLink=\"/home\" class=\"navbar-brand\">\n    Class Attendance System\n  </a>\n  <div class=\"collapse navbar-toggleable-md\" id=\"mainNavbarCollapse\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\">\n        <a routerLink=\"/home\" class=\"nav-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" >Home</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserAnAdmin()\">\n        <a routerLink=\"/admin\" class=\"nav-link\" routerLinkActive=\"active\">\n          Admin\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserALecturer()\">\n        <a routerLink=\"/lecturer\" class=\"nav-link\" routerLinkActive=\"active\">\n          Dashboard\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserAStudent()\">\n        <a routerLink=\"/student\" class=\"nav-link\" routerLinkActive=\"active\">\n          Dashboard\n        </a>\n      </li>\n      <li class=\"nav-item\" >\n        <a [routerLink]=\"['/common/lecturer',lecturer_id]\" class=\"nav-link\" routerLinkActive=\"active\">\n          {{lecturer?.title}} {{lecturer?.name.last}}\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div *ngIf=\"!isLoading\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 toppad\" >\n      <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">{{lecturer?.title}} {{lecturer.name.first}} {{lecturer.name.middle}} {{lecturer.name.last}}</h3>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-3\" align=\"center\"> <img alt=\"User Pic\" [src]=\"lecturer?.grav_url\" class=\"img-circle img-responsive\"> </div>\n            <!--<div class=\"col-md-3\" align=\"center\"> <span class=\"fa fa-\"> </div>-->\n            <div class=\" col-md-9\">\n              <table class=\"table table-lecturer-information\">\n                <tbody>\n                <tr>\n                  <td>Role:</td>\n                  <td>Lecturer</td>\n                </tr>\n                <tr>\n                  <td>Specialization</td>\n                  <td>{{lecturer.specialization}}</td>\n                </tr>\n                <tr>\n                  <td>Gender</td>\n                  <td>Male</td>\n                </tr>\n                <tr>\n                  <td>Email</td>\n                  <td><a href=\"mailto:info@support.com\">{{lecturer.email}}</a></td>\n                </tr>\n                <tr>\n                  <td>Courses Coordinated</td>\n                  <td><small *ngFor=\"let course of lecturer?.courses\"><a [routerLink]=\"['/common/course',course._id]\">{{course.code}}</a> </small></td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel-footer\">\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isLoading\">\n  <h4 class=\"card-header\">Loading...</h4>\n  <div class=\"card-block text-xs-center\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n  </div>\n</div>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<nav *ngIf=\"!isLoading\" class=\"navbar navbar-full navbar-dark navbar-custom\">\n  <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNavbarCollapse\">\n    &#9776;\n  </button>\n  <a routerLink=\"/home\" class=\"navbar-brand\">\n    Class Attendance System\n  </a>\n  <div class=\"collapse navbar-toggleable-md\" id=\"mainNavbarCollapse\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\">\n        <a routerLink=\"/home\" class=\"nav-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" >Home</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserAnAdmin()\">\n        <a routerLink=\"/admin\" class=\"nav-link\" routerLinkActive=\"active\">\n          Admin\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserALecturer()\">\n        <a routerLink=\"/lecturer\" class=\"nav-link\" routerLinkActive=\"active\">\n          Dashboard\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserAStudent()\">\n        <a routerLink=\"/student\" class=\"nav-link\" routerLinkActive=\"active\">\n          Dashboard\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"card\" *ngIf=\"!isLoading\">\n    <h4 class=\"card-header\">All lectures ({{lectures.length}})</h4>\n    <div class=\"card-block\">\n      <table class=\"table table-bordered table-hover table-responsive\">\n        <thead class=\"thead-inverse\">\n        <tr>\n          <th>Topic</th>\n          <th>Created</th>\n          <th>Last Updated</th>\n          <th>Course</th>\n          <th class=\"actions\" *ngIf=\"isUserAdmin || isUserLecturer\">Actions</th>\n        </tr>\n        </thead>\n        <tbody *ngIf=\"lectures.length === 0\">\n        <tr>\n          <td colspan=\"3\">There are no lectures in the DB. Add a new lecture from the device.</td>\n        </tr>\n        </tbody>\n        <tbody *ngIf=\"!isEditing\">\n        <tr *ngFor=\"let lecture of lectures; let i = index\">\n          <td><a [routerLink]=\"['/common/lecture',lecture?._id]\">{{lecture.topic}}</a></td>\n          <td>{{lecture.createdAt| date:'short'}}</td>\n          <td>{{lecture.updatedAt | date:'short'}}</td>\n          <td><a [routerLink]=\"['/common/course',lecture?.course?._id]\">{{lecture?.course?.code}}</a></td>\n          <td *ngIf=\"isUserAdmin\" class=\"actions\">\n            <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(lecture)\"><em class=\"fa fa-pencil\"></em></button>\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deleteLecture(lecture)\"><em class=\"fa fa-trash\"></em></button>\n          </td>\n        </tr>\n        </tbody>\n        <tbody *ngIf=\"isUserAdmin && isEditing\">\n        <tr>\n          <td colspan=\"3\">You are allowed to edit only the Topic of this lecture.</td>\n          <td colspan=\"7\">\n            <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editLecture(lecture)\" style=\"display:inline\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" name=\"topic\" [(ngModel)]=\"lecture.topic\" placeholder=\"Topic\" required>\n              </div>\n              <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n            </form>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\"><i class=\"fa fa-times\"></i> Cancel</button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n\n</div>\n\n\n"

/***/ }),

/***/ 379:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isLoading\">\n  <h4 class=\"card-header\">Loading...</h4>\n  <div class=\"card-block text-xs-center\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n  </div>\n</div>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<nav *ngIf=\"!isLoading\" class=\"navbar navbar-full navbar-dark navbar-custom\">\n  <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNavbarCollapse\">\n    &#9776;\n  </button>\n  <a routerLink=\"/home\" class=\"navbar-brand\">\n    Class Attendance System\n  </a>\n  <div class=\"collapse navbar-toggleable-md\" id=\"mainNavbarCollapse\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\">\n        <a routerLink=\"/home\" class=\"nav-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" >Home</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserAnAdmin()\">\n        <a routerLink=\"/admin\" class=\"nav-link\" routerLinkActive=\"active\">\n          Admin\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserALecturer()\">\n        <a routerLink=\"/lecturer\" class=\"nav-link\" routerLinkActive=\"active\">\n          Dashboard\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserAStudent()\">\n        <a routerLink=\"/student\" class=\"nav-link\" routerLinkActive=\"active\">\n          Dashboard\n        </a>\n      </li>\n      <li class=\"nav-item\" >\n        <a [routerLink]=\"['/common/student',student_id]\" class=\"nav-link\" routerLinkActive=\"active\">\n          {{student?.name.first}}\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div *ngIf=\"!isLoading\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 toppad\" >\n      <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">{{student.name.first}} {{student.name.last}}</h3>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-3\" align=\"center\"> <img alt=\"User Pic\" [src]=\"student?.grav_url\" class=\"img-circle img-responsive\"> </div>\n            <!--<div class=\"col-md-3\" align=\"center\"> <span class=\"fa fa-\"> </div>-->\n            <div class=\" col-md-9\">\n              <table class=\"table table-student-information\">\n                <tbody>\n                <tr>\n                  <td>Role:</td>\n                  <td>Student</td>\n                </tr>\n                <tr>\n                  <td>Matric No:</td>\n                  <td>{{student.matric_no}}</td>\n                </tr>\n                <tr>\n                  <td>RFID No:</td>\n                  <td>{{student.rfid_uid}}</td>\n                </tr>\n                <tr>\n                  <td>Gender</td>\n                  <td>Male</td>\n                </tr>\n                <tr>\n                  <td>Email</td>\n                  <td><a href=\"mailto:info@support.com\">{{student.email}}</a></td>\n                </tr>\n                <tr>\n                  <td>Level</td>\n                  <td>{{student.level}}</td>\n                </tr>\n                <tr>\n                  <td>Registered Courses</td>\n                  <td><small *ngFor=\"let course of student?.courses\"><a [routerLink]=\"['/common/course',course._id]\">{{course.code}}</a> </small></td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel-footer\">\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isLoading\">\n  <h4 class=\"card-header\">Welcome</h4>\n  <div class=\"card-block text-xs-center\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n  </div>\n</div>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<!-- About Section -->\n<section class=\"success\" >\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-xs-center\">\n        <h2>About</h2>\n        <hr class=\"star-light\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 offset-lg-2\">\n        <p>This is the web app for the project titled 'RFID Class Attendance System'.\n          It is built with Angular2 using Typescript. The app is served by a nodejs app which\n          also provides API routes for the hardware implementation.</p>\n      </div>\n      <div class=\"col-lg-4\">\n        <p>This App provides an interface for students and lecturers to login, signup. It also enables students to keep track of their,\n          class attendance records for specific courses. Similarly, lecturers can view records for courses they co-ordinate and download\n          relevant data.\n        </p>\n      </div>\n      <div class=\"col-lg-8 offset-lg-2 text-xs-center\">\n        <a href=\"#\" class=\"btn btn-lg btn-outline\">\n          <i class=\"fa fa-download\"></i> Download Theme\n        </a>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-full navbar-dark navbar-custom\">\n  <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNavbarCollapse\">\n    &#9776;\n  </button>\n  <a routerLink=\"/home\" class=\"navbar-brand\">\n    Class Attendance System\n  </a>\n  <div class=\"collapse navbar-toggleable-md\" id=\"mainNavbarCollapse\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\">\n        <a routerLink=\"/home\" class=\"nav-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" >Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"/about\" class=\"nav-link\" routerLinkActive=\"active\">\n          About\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserAnAdmin()\">\n        <a routerLink=\"/admin\" class=\"nav-link\" routerLinkActive=\"active\">\n          Admin\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserALecturer()\">\n        <a routerLink=\"/lecturer\" class=\"nav-link\" routerLinkActive=\"active\">\n          Dashboard\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserAStudent()\">\n        <a routerLink=\"/student\" class=\"nav-link\" routerLinkActive=\"active\">\n          Dashboard\n        </a>\n      </li>\n      <li class=\"nav-item\"  *ngIf=\"!userService.isLoggedIn()\">\n        <a routerLink=\"/login\"  class=\"nav-link\" routerLinkActive=\"active\">\n          Login\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isLoggedIn()\">\n        <a routerLink=\"/login\" class=\"nav-link\" routerLinkActive=\"active\">\n          Logout\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!userService.isLoggedIn()\">\n        <a routerLink=\"/register\" class=\"nav-link\" routerLinkActive=\"active\">\n          Register\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isLoading\">\n  <h4 class=\"card-header\">Welcome</h4>\n  <div class=\"card-block text-xs-center\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n  </div>\n</div>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<!-- Header -->\n<header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <img class=\"img-responsive\" src=\"/assets/img/profile.png\" alt=\"\">\n        <div class=\"intro-text\">\n          <span class=\"name\">Class Attendance System</span>\n          <hr class=\"star-light\">\n          <span class=\"skills\">Final Year Project for Excellence O. Ilesanmi</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ 383:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isLoading\">\n    <h4 class=\"card-header\">Loading...</h4>\n    <div class=\"card-block text-xs-center\">\n        <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n    </div>\n</div>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<section>\n\n    <div class=\"card col-sm-6 offset-sm-3\" *ngIf=\"!isEditing\">\n        <h4 class=\"card-header\">Login</h4>\n        <div class=\"card-block\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n                <div class=\"form-group row\">\n                    <label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label>\n                    <div class=\"col-sm-10\">\n                        <input class=\"form-control\" type=\"email\" id=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\" required>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label for=\"password\" class=\"col-sm-2 col-form-label\">Password</label>\n                    <div class=\"col-sm-10\">\n                        <input class=\"form-control\" type=\"password\"  id=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\" required>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"offset-sm-2 col-sm-10\">\n                        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-primary\">Sign in</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n</section>"

/***/ }),

/***/ 384:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isLoading\">\n    <h4 class=\"card-header\">Loading...</h4>\n    <div class=\"card-block text-xs-center\">\n        <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n    </div>\n</div>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<section>\n\n    <div class=\"card col-sm-6 offset-sm-3\" *ngIf=\"!isEditing\">\n        <h4 class=\"card-header\">Register</h4>\n        <div class=\"card-block\">\n            <form #f=\"ngForm\" (ngSubmit)=\"register(f.value)\">\n                <div class=\"form-group row\">\n                    <label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label>\n                    <div class=\"col-sm-10\">\n                        <input class=\"form-control\" type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"user.email\"  placeholder=\"Email\" required>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label for=\"password\" class=\"col-sm-2 col-form-label\">Password</label>\n                    <div class=\"col-sm-10\">\n                        <input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\"\n                               #password=\"ngModel\" placeholder=\"Password\" validateEqual=\"confirmPassword\" reverse=\"true\" required>\n                        <small [hidden]=\"password.valid || (password.pristine && !f.submitted)\">\n                            Password is required\n                        </small>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label for=\"confirmPassword\" class=\"col-sm-2 col-form-label\">Confirm Password</label>\n                    <div class=\"col-sm-10\">\n                        <input class=\"form-control\" type=\"password\" id=\"confirmPassword\" name=\"confirmPassword\" [(ngModel)]=\"user.confirmPassword\"\n                               #confirmPassword=\"ngModel\" placeholder=\"ConfirmPassword\" validateEqual=\"password\" required>\n                        <small [hidden]=\"confirmPassword.valid || (confirmPassword.pristine && !f.submitted)\">\n                            Password mismatch\n                        </small>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label for=\"firstname\" class=\"col-sm-2 col-form-label\">Firstname</label>\n                    <div class=\"col-sm-10\">\n                        <input class=\"form-control\" type=\"text\"  id=\"firstname\" name=\"firstname\" [(ngModel)]=\"user.firstname\"\n                               required placeholder=\"Firstname\">\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label for=\"middlename\" class=\"col-sm-2 col-form-label\">Middlename</label>\n                    <div class=\"col-sm-10\">\n                        <input class=\"form-control\" type=\"text\"  id=\"middlename\" name=\"middlename\" [(ngModel)]=\"user.middlename\"\n                               required placeholder=\"Middlename\">\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label for=\"lastname\" class=\"col-sm-2 col-form-label\">Lastname</label>\n                    <div class=\"col-sm-10\">\n                        <input class=\"form-control\" type=\"text\"  id=\"lastname\" name=\"lastname\" [(ngModel)]=\"user.lastname\"\n                               required placeholder=\"Lastname\">\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label for=\"gender\" class=\"col-sm-2 col-form-label\">Gender</label>\n                    <div class=\"col-sm-4\" *ngFor=\"let gender of genders\">\n                        <input class=\"form-control\" type=\"radio\" id=\"gender\" name=\"gender\" [(ngModel)]=\"user.gender\"\n                               [value]=\"gender.value\" required>\n                        {{gender.display}}\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <label for=\"role\" class=\"col-sm-2 col-form-label\">Role</label>\n                    <div class=\"col-sm-4\" *ngFor=\"let role of roles; let i=index\">\n                        <input class=\"form-control\" type=\"radio\" id=\"role\" name=\"role\" [(ngModel)]=\"user.role\"\n                               (ngModelChange)=\"setRole()\"  [value]=\"role.value\" required>\n                        {{role.display}}\n                    </div>\n                </div>\n                <div class=\"lecturer\" *ngIf=\"!isStudent\">\n                    <div class=\"form-group row\">\n                        <label for=\"title\" class=\"col-sm-2 col-form-label\">Title</label>\n                        <div class=\"col-sm-10\">\n                            <select id=\"title\" name=\"title\" [(ngModel)]=\"user.title\"  required>\n                                <option *ngFor=\"let title of titles\" [ngValue]=\"title.value\">\n                                    {{title.display}}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"specialization\" class=\"col-sm-2 col-form-label\">Specialization</label>\n                        <div class=\"col-sm-10\">\n                            <select id=\"specialization\" name=\"specialization\" [(ngModel)]=\"user.specialization\" >\n                                <option *ngFor=\"let specialization of specializations\" [ngValue]=\"specialization.value\">\n                                    {{specialization.display}}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"student\" *ngIf=\"isStudent\">\n                    <div class=\"form-group row\">\n                        <label for=\"matric_no\" class=\"col-sm-2 col-form-label\">Matric Number</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control\" type=\"text\"  id=\"matric_no\" name=\"matric_no\" [(ngModel)]=\"user.matric_no\"\n                                   placeholder=\"XXX/XXXX/XXX\" >\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"rfid_uid\" class=\"col-sm-2 col-form-label\">RFID Tag UID</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control\" type=\"text\"  id=\"rfid_uid\" name=\"rfid_uid\" [(ngModel)]=\"user.rfid_uid\"\n                                   placeholder=\"XXX XXX XX\" >\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"level\" class=\"col-sm-2 col-form-label\">Level</label>\n                        <div class=\"col-sm-10\">\n                            <input class=\"form-control\" type=\"number\" id=\"level\" name=\"level\" [(ngModel)]=\"user.level\"\n                                   placeholder=\"Level\" step=\"100\" min=\"100\" max=\"500\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"offset-sm-2 col-sm-10\">\n                        <button type=\"submit\" [disabled]=\"!f.valid\" class=\"btn btn-primary\">Register</button>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\" style=\"margin-top: 20px\" *ngIf=\"f\">\n                    <div>Form details:-</div>\n                    <pre>Is form valid?: <br>{{f.valid | json}}</pre>\n                    <pre>Is form submitted?: <br>{{f.submitted | json}}</pre>\n                    <pre>submitted value: <br>{{f.value | json}}</pre>\n                </div>\n            </form>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ 385:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-full navbar-dark navbar-custom\">\n  <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNavbarCollapse\">\n    &#9776;\n  </button>\n  <a routerLink=\"/home\" class=\"navbar-brand\">\n    Class Attendance System\n  </a>\n  <div class=\"collapse navbar-toggleable-md\" id=\"mainNavbarCollapse\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\">\n        <a routerLink=\"/home\" class=\"nav-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" >Home</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserALecturer()\">\n        <a routerLink=\"/lecturer/courses\" class=\"nav-link\" routerLinkActive=\"active\">\n          Courses\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isLoggedIn()\">\n        <a routerLink=\"/login\" class=\"nav-link\" routerLinkActive=\"active\">\n          Logout\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message.body\" class=\"alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <strong>Message:</strong> {{message.body}}\n</div>"

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isLoading\">\n  <h4 class=\"card-header\">Loading...</h4>\n  <div class=\"card-block text-xs-center\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n  </div>\n</div>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 toppad\" >\n      <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">{{this.user.name.first}} {{this.user.name.last}}</h3>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-3\" align=\"center\"> <img alt=\"User Pic\" [src]=\"this.user.grav_url\" class=\"img-circle img-responsive\"> </div>\n            <div class=\" col-md-9\">\n              <table class=\"table table-user-information\">\n                <tbody>\n                <tr>\n                  <td>Role:</td>\n                  <td>Student</td>\n                </tr>\n                <tr>\n                  <td>Matric No:</td>\n                  <td>{{this.user.matric_no}}</td>\n                </tr>\n                <tr>\n                  <td>RFID No:</td>\n                  <td>{{this.user.rfid_uid}}</td>\n                </tr>\n\n                <tr>\n                <tr>\n                  <td>Gender</td>\n                  <td>Male</td>\n                </tr>\n                <!--<tr>-->\n                  <!--<td>Home Address</td>-->\n                  <!--<td>Kathmandu,Nepal</td>-->\n                <!--</tr>-->\n                <tr>\n                  <td>Email</td>\n                  <td><a href=\"mailto:info@support.com\">{{this.user.email}}</a></td>\n                </tr>\n                <tr>\n                  <td>Level</td>\n                  <td>{{this.user.level}}</td>\n                </tr>\n                </tbody>\n              </table>\n\n              <!--<a href=\"#\" class=\"btn btn-primary\">My Sales Performance</a>-->\n              <!--<a href=\"#\" class=\"btn btn-primary\">Team Sales Performance</a>-->\n            </div>\n          </div>\n        </div>\n        <div class=\"panel-footer\">\n          <!--<a data-original-title=\"Broadcast Message\" data-toggle=\"tooltip\" type=\"button\" class=\"btn btn-sm btn-primary\"><i class=\"glyphicon glyphicon-envelope\"></i></a>-->\n          <!--<span class=\"pull-right\">-->\n                            <!--<a href=\"edit.html\" data-original-title=\"Edit this user\" data-toggle=\"tooltip\" type=\"button\" class=\"btn btn-sm btn-warning\"><i class=\"glyphicon glyphicon-edit\"></i></a>-->\n                            <!--<a data-original-title=\"Remove this user\" data-toggle=\"tooltip\" type=\"button\" class=\"btn btn-sm btn-danger\"><i class=\"glyphicon glyphicon-remove\"></i></a>-->\n                        <!--</span>-->\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-full navbar-dark navbar-custom\">\n  <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNavbarCollapse\">\n    &#9776;\n  </button>\n  <a routerLink=\"/home\" class=\"navbar-brand\">\n    Class Attendance System\n  </a>\n  <div class=\"collapse navbar-toggleable-md\" id=\"mainNavbarCollapse\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\">\n        <a routerLink=\"/home\" class=\"nav-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" >Home</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserAStudent()\">\n        <a routerLink=\"/student/profile\" class=\"nav-link\" routerLinkActive=\"active\">\n          Profile\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isUserAStudent()\">\n        <a routerLink=\"/student/courses\" class=\"nav-link\" routerLinkActive=\"active\">\n          Courses\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userService.isLoggedIn()\">\n        <a routerLink=\"/login\" class=\"nav-link\" routerLinkActive=\"active\">\n          Logout\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isLoading\">\n  <h4 class=\"card-header\">Welcome</h4>\n  <div class=\"card-block text-xs-center\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n  </div>\n</div>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<!-- About Section -->\n<section class=\"success\" >\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-xs-center\">\n        <h2>404</h2>\n        <hr class=\"star-light\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-8 offset-lg-2 text-xs-center\">\n        <h4> Page Not Found</h4>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(165);


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_user_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CoursesComponent = (function () {
    function CoursesComponent(http, dataService, userService, toast, formBuilder) {
        this.http = http;
        this.dataService = dataService;
        this.userService = userService;
        this.toast = toast;
        this.formBuilder = formBuilder;
        this.courses = [];
        this.lecturers = [];
        this.isLoading = true;
        this.isEditing = false;
        this.title = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.code = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.units = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.level = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.bio = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
        this.coordinator = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required);
    }
    CoursesComponent.prototype.ngOnInit = function () {
        this.course = {
            _id: null,
            title: '',
            code: '',
            units: 1,
            level: 100,
            about: { page: { raw: '', html: '' }, bio: '' },
            coordinator: {}
        };
        this.addCourseForm = this.formBuilder.group({
            title: this.title,
            code: this.code,
            units: this.units,
            level: this.level,
            bio: this.bio,
            coordinator: this.coordinator
        });
        this.isUserAdmin = this.userService.isUserAnAdmin();
        this.isUserLecturer = this.userService.isUserALecturer();
        this.isUserStudent = this.userService.isUserAStudent();
        this.currentUser = this.userService.getUserDetails();
        this.getCourses();
        this.getLecturers();
    };
    CoursesComponent.prototype.getCourses = function () {
        var _this = this;
        if (this.isUserLecturer) {
            this.dataService.getCoursesForLecturer(this.userService.getUserDetails()._id).subscribe(function (data) { return _this.courses = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
        }
        else {
            this.dataService.getCourses().subscribe(function (data) { return _this.courses = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
        }
    };
    CoursesComponent.prototype.getLecturers = function () {
        var _this = this;
        this.dataService.getLecturers().subscribe(function (data) { return _this.lecturers = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    CoursesComponent.prototype.addCourse = function () {
        var _this = this;
        this.resetCourse();
        this.course.title = this.addCourseForm.value.title;
        this.course.code = this.addCourseForm.value.code;
        this.course.units = this.addCourseForm.value.units;
        this.course.level = this.addCourseForm.value.level;
        this.course.about.bio = this.addCourseForm.value.bio;
        this.course.coordinator = this.addCourseForm.value.coordinator;
        this.dataService.addCourse(this.course).subscribe(function (res) {
            var newCourse = res.json();
            _this.courses.push(newCourse);
            _this.addCourseForm.reset();
            _this.toast.setMessage('item added successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    CoursesComponent.prototype.resetCourse = function () {
        this.course = {
            _id: null,
            title: '',
            code: '',
            units: 1,
            level: 100,
            about: { page: { raw: '', html: '' }, bio: '' },
            coordinator: {}
        };
    };
    CoursesComponent.prototype.enableEditing = function (course) {
        this.isEditing = true;
        this.course = course;
    };
    CoursesComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.resetCourse();
        this.toast.setMessage('item editing cancelled.', 'warning');
        // reload the courses to reset the editing
        this.getCourses();
    };
    CoursesComponent.prototype.editCourse = function (course) {
        var _this = this;
        this.dataService.editCourse(course).subscribe(function (res) {
            _this.isEditing = false;
            var i = _this.courses.findIndex(function (localCourse) { return localCourse._id === course._id; });
            _this.courses[i] = res.json();
            _this.toast.setMessage('Success', 'success');
        }, function (error) { return console.log(error); });
        this.resetCourse();
    };
    CoursesComponent.prototype.deleteCourse = function (course) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.dataService.deleteCourse(course).subscribe(function (res) {
                // map returns an array of the ids of all courses & indexOf returns the
                // index at which the id of deleted course passed in as an argument to deleteCourse occurs
                var pos = _this.courses.map(function (course_) {
                    return course_._id;
                }).indexOf(course._id);
                _this.courses.splice(pos, 1);
                _this.toast.setMessage('item deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    CoursesComponent.prototype.isStudentRegistered = function (course) {
        var _this = this;
        if (course.students !== null) {
            return course.students.map(function (student) {
                return student._id;
            }).find(function (id) {
                return id === _this.currentUser._id;
            });
        }
        return false;
    };
    CoursesComponent.prototype.getStyle = function (course) {
        if (this.isStudentRegistered(course)) {
            return '#128f76';
        }
        else {
            return 'inherit';
        }
    };
    CoursesComponent.prototype.updateCourseForStudent = function (course, i_, isReg) {
        var _this = this;
        if (isReg) {
            this.updateRegButton(i_, false);
        }
        else {
            this.updateUnRegButton(i_, false);
        }
        this.dataService.editCourse(course).subscribe(function (res) {
            _this.isEditing = false;
            var i = _this.courses.findIndex(function (localCourse) { return localCourse._id === course._id; });
            _this.courses[i] = res.json();
            _this.toast.setMessage('Success', 'success');
        }, function (error) {
            console.log(error);
        }, function () {
            if (isReg) {
                _this.updateRegButton(i_, true);
            }
            else {
                _this.updateUnRegButton(i_, true);
            }
        });
        this.resetCourse();
    };
    CoursesComponent.prototype.registerCourse = function (course, i) {
        if (this.isStudentRegistered(course)) {
            this.toast.setMessage('You are already Registered, please contact the administrator', 'error');
            return;
        }
        var student = this.currentUser;
        this.course = course;
        this.course.students = this.course.students.map(function (student_) {
            return student_._id;
        });
        this.course.students.push(student._id);
        this.updateCourseForStudent(this.course, i, true);
    };
    CoursesComponent.prototype.unregisterCourse = function (course, i) {
        if (!this.isStudentRegistered(course)) {
            this.toast.setMessage('You were not previously Registered, please contact the administrator', 'error');
            return;
        }
        var student = this.currentUser;
        var pos = course.students.map(function (student_) {
            return student_._id;
        }).find(function (id) {
            return id === student._id;
        });
        course.students.splice(pos, 1);
        this.updateCourseForStudent(course, i, false);
    };
    CoursesComponent.prototype.updateRegButton = function (i, enable) {
        this.regs.toArray().find(function (e) {
            return e.nativeElement.getAttribute('id') === 'reg' + i;
        }).nativeElement.disabled = !enable;
    };
    CoursesComponent.prototype.updateUnRegButton = function (i, enable) {
        this.regs.toArray().find(function (e) {
            return e.nativeElement.getAttribute('id') === 'reg' + i;
        }).nativeElement.disabled = !enable;
    };
    return CoursesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChildren */])('reg'),
    __metadata("design:type", Object)
], CoursesComponent.prototype, "regs", void 0);
CoursesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-courses',
        template: __webpack_require__(375),
        styles: [__webpack_require__(348)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */]) === "function" && _e || Object])
], CoursesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=courses.component.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__courses_courses_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_global_module__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commons_routing_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__course_course_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lecturer_lecturer_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__student_student_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lectures_lectures_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lecture_lecture_component__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CommonsModule = (function () {
    function CommonsModule() {
    }
    return CommonsModule;
}());
CommonsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__global_global_module__["a" /* GlobalModule */],
            __WEBPACK_IMPORTED_MODULE_5__commons_routing_module__["a" /* CommonsRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__courses_courses_component__["a" /* CoursesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__course_course_component__["a" /* CourseComponent */],
            __WEBPACK_IMPORTED_MODULE_7__lecturer_lecturer_component__["a" /* LecturerComponent */],
            __WEBPACK_IMPORTED_MODULE_8__student_student_component__["a" /* StudentComponent */],
            __WEBPACK_IMPORTED_MODULE_9__lectures_lectures_component__["a" /* LecturesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__lecture_lecture_component__["a" /* LectureComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__courses_courses_component__["a" /* CoursesComponent */]
        ]
    })
], CommonsModule);

//# sourceMappingURL=commons.module.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lon on 12/27/16.
 */



var LoggedInGuard = (function () {
    function LoggedInGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function () {
        if (this.user.isLoggedIn()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    };
    return LoggedInGuard;
}());
LoggedInGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LoggedInGuard);

var _a, _b;
//# sourceMappingURL=logged-in.guard.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lon on 12/25/16.
 */


var UserService = (function () {
    function UserService() {
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('token');
    }
    UserService.prototype.login = function (res) {
        localStorage.setItem('current_user', JSON.stringify(res.user));
        localStorage.setItem('token', res.user.token);
        this.loggedIn = true;
        return res.success;
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('current_user');
        localStorage.removeItem('token');
        this.loggedIn = false;
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService.prototype.getUserDetails = function () {
        if (this.isLoggedIn()) {
            return JSON.parse(localStorage.getItem('current_user'));
        }
    };
    UserService.prototype.isUserAStudent = function () {
        if (this.isLoggedIn()) {
            return JSON.parse(localStorage.getItem('current_user')).__t === 'Student';
        }
        return false;
    };
    UserService.prototype.isUserALecturer = function () {
        if (this.isLoggedIn()) {
            return JSON.parse(localStorage.getItem('current_user')).__t === 'Lecturer';
        }
        return false;
    };
    UserService.prototype.isUserAnAdmin = function () {
        if (this.isLoggedIn()) {
            var current_user = JSON.parse(localStorage.getItem('current_user'));
            // console.log(current_user);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_util__["isNull"])(current_user.is_admin) ? false : (current_user.is_admin);
        }
        return false;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(userService) {
        this.userService = userService;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__(370),
        styles: [__webpack_require__(343)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ })

},[426]);
//# sourceMappingURL=main.bundle.js.map