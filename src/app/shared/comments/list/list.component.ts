import { Component, Input, OnInit } from '@angular/core';
import { Comment, CommentType } from '../comment.model';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() public raceId: number | undefined;
  @Input() public type: CommentType = 'all';

  public comments: Comment[] = [];

  constructor(private readonly commentsService: CommentsService) {}

  public ngOnInit(): void {
    if (this.raceId) {
      this.commentsService.getComments(this.raceId, this.type).subscribe((comments: Comment[]) => {
        this.comments = comments;
      });
    }
  }
}
