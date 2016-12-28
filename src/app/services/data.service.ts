import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getCats() {
    return this.http.get('/api/cats').map(res => res.json());
  }

  addCat(cat) {
    return this.http.post("/api/cat", JSON.stringify(cat), this.options);
  }

  editCat(cat) {
    return this.http.put(`/api/cat/${cat._id}`, JSON.stringify(cat), this.options);
  }

  deleteCat(cat) {
    return this.http.delete(`/api/cat/${cat._id}`, this.options);
  }

  getCourses() {
    return this.http.get('/api/courses').map(res => res.json());
  }

  addCourse(course) {
    return this.http.post("/api/course", JSON.stringify(course), this.options);
  }

  editCourse(course) {
    return this.http.put(`/api/course/${course._id}`, JSON.stringify(course), this.options);
  }

  deleteCourse(course) {
    return this.http.delete(`/api/course/${course._id}`, this.options);
  }

  login(user){
    return this.http.post("/api/login", JSON.stringify(user), this.options)
  }

  register(user){
    return this.http.post("/api/register", JSON.stringify(user), this.options)
  }
}
