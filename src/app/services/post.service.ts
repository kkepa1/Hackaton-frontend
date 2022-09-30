import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../models/post";
import {LocalService} from "./local.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private ROOT_URL = 'http://localhost:8080/api/v1/users';
  private ROOT_URL_POST = 'http://localhost:8080/api/v1/posts/';
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.ROOT_URL_POST + "all")
  }

  addPost(post: Post) {
    let userId = LocalService.getLoggedUser().id;
    return this.http.post(`${this.ROOT_URL}/${userId}/add-post`, post);
  }

  likePost(postId: number) {
    // @ts-ignore
    return this.http.put(`${this.ROOT_URL}/${postId}/update-post`);
  }
}
