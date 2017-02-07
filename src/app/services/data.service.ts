import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getLecturers() {
        return this.http.get('/api/lecturers').map(res => res.json());
    }

    getLecturer(lecturer_id) {
        return this.http.get(`/api/lecturer/${lecturer_id}`).map(res => res.json());
    }

    deleteLecturer(lecturer: any) {
        return this.http.delete(`/api/lecturer/${lecturer._id}`, this.options);
    }

    getStudents() {
        return this.http.get('/api/students').map(res => res.json());
    }

    getStudent(student_id) {
        return this.http.get(`/api/student/${student_id}`).map(res => res.json());
    }

    deleteStudent(student: any) {
        return this.http.delete(`/api/student/${student._id}`, this.options);
    }

    addCourse(course) {
        return this.http.post('/api/course', JSON.stringify(course), this.options);
    }

    getCourses() {
        return this.http.get('/api/courses').map(res => res.json());
    }

    getCourse(course_id) {
        return this.http.get(`/api/course/${course_id}`).map(res => res.json());
    }

    editCourse(course) {
        return this.http.put(`/api/course/${course._id}`, JSON.stringify(course), this.options);
    }

    deleteCourse(course) {
        return this.http.delete(`/api/course/${course._id}`, this.options);
    }

    login(user) {
        return this.http.post('/api/login', JSON.stringify(user), this.options);
    }

    register(user) {
        return this.http.post('/api/register', JSON.stringify(user), this.options);
    }


    getLectures(course_id: any) {
        return this.http.get(`/api/lectures_/${course_id}`).map(res => res.json());
    }

    editLecture(lecture: any) {
        return this.http.put(`/api/lecture_/${lecture._id}`, JSON.stringify(lecture), this.options);
    }

    deleteLecture(lecture: any) {
        return this.http.delete(`/api/lecture/${lecture._id}`, this.options);
    }

}
