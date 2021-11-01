import { Component, OnInit } from "@angular/core";
import { IPost } from "src/app/models/post.model";
import { PostService } from "src/app/services/post.service";
import { NotificationService } from "src/app/services/notification.service";
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public posts!: IPost[];
  public isLoading: boolean = false;

  constructor(private postService: PostService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.postService.getPostsList()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(res => {
          this.posts = res;
        },
        (err) => {
          this.notificationService.error(err);
        })
  }

}
