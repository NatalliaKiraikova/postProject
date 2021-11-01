import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPost } from "src/app/models/post.model";
import { ApiService } from "src/app/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private apiService: ApiService) {
  }

  getPostsList(): Observable<IPost[]> {
    return this.apiService.get('/posts');
  }

}
