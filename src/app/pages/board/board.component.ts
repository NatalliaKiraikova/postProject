import { Component, OnInit } from "@angular/core";
import { PostService } from "src/app/services/post.service";
import { NotificationService } from "src/app/services/notification.service";
import { finalize } from "rxjs/operators";
import { PostStoreService } from "src/app/store/post.store";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  // public posts!: IPost[];
  public isLoading: boolean = false;

  constructor(private postService: PostService,
              private notificationService: NotificationService,
              public postStoreService: PostStoreService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.postService.getPostsList()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(res => {
          // this.posts = res;
          this.postStoreService.setPosts(res);
        },
        (err) => {
          this.notificationService.error(err);
        })
  }

}
