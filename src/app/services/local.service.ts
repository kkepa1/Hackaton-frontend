import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Comments} from "../models/comments";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http: HttpClient) { }

  fetchComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>("localhost:8080/api/v1/comments/")
  }

  public static saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public static getData(key: string) {
    return localStorage.getItem(key)
  }

  public static removeData(key: string) {
    localStorage.removeItem(key);
  }

  public static clearData() {
    localStorage.clear();
  }

  public static getLoggedUser() {
    let user = localStorage.getItem('user');
    if (user != null) {
      return JSON.parse(user);
    }
  }
}
