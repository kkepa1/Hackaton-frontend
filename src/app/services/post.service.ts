import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {Md5} from "ts-md5";
import {Post} from "../models/post";
import {LocalService} from "./local.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private ROOT_URL = 'http://localhost:8080/api/v1/users';
  private ROOT_URL_POST = 'http://localhost:8080/api/v1/posts/';
  private http: HttpClient;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
  }

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.ROOT_URL_POST + "all")
  }

  addPost(post: Post) {
    let userId = LocalService.getLoggedUser().id;
    console.log(userId);
    return this.http.post(`${this.ROOT_URL}/${userId}/add-post`, post, this.httpOptions);
  }
}
