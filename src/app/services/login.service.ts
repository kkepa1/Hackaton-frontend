import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Md5} from "ts-md5";
import {User} from "../models/user";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private ROOT_URL = 'http://localhost:8080';
  private http: HttpClient;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(http: HttpClient) {
    this.http = http;
  }

  signIn(form: FormGroup): Observable<User> {
    const body = JSON.stringify({
      username: form.value["username"],
      password: Md5.hashStr(JSON.stringify(form.value["password"]))
    });
    return this.http.post<User>(`${this.ROOT_URL}/login`, body, this.httpOptions);  }

}
