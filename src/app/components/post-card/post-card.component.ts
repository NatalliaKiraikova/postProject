import { Component, Input } from "@angular/core";
import { IPost } from "src/app/models/post.model";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input() post!: IPost;

  public userIdState: boolean = false;

  constructor() {
  }

  onCardClick(): void {
    this.userIdState = !this.userIdState;
  }
}
