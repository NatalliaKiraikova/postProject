import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPost } from "src/app/models/post.model";

@Injectable({providedIn: "root"})
export class PostStoreService {
  private readonly _postsSource = new BehaviorSubject<IPost[]>([]);

  readonly posts$ = this._postsSource.asObservable();

  constructor() {
  }

  getPosts(): IPost[] {
    return this._postsSource.getValue();
  }

  setPosts(posts: IPost[]) {
    return this._setPosts(posts);
  }

  addPost(post: IPost): void {
    const posts = [...this.getPosts(), post];
    this._setPosts(posts);
  }

  private _setPosts(posts: IPost[]): void {
    this._postsSource.next(posts);
  }

}
