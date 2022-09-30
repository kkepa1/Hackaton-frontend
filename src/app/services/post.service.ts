import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../models/post";
import {LocalService} from "./local.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private ROOT_URL = 'http://localhost:8080/api/v1/users';
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  addPost(post: Post) {
    let userId = LocalService.getLoggedUser().id;
    return this.http.post(`${this.ROOT_URL}/${userId}/add-post`, post);
  }
}
