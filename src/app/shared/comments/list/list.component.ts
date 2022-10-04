import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Comment, CommentType } from '../comment.model';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnChanges {
  @Input() public raceId: number | undefined;
  @Input() public type: CommentType = 'all';

  public commentsAsync: Observable<Comment[]> = of([]);
  public commentsWithASubscribe: Comment[] = [];

  constructor(private readonly commentsService: CommentsService) {}

  public ngOnChanges(simpleChanges: SimpleChanges): void {
    console.log(simpleChanges);
    if (this.raceId) {
      this.commentsAsync = this.commentsService.getComments(this.raceId, this.type);
      this.commentsService.getComments(this.raceId, this.type).subscribe((comments: Comment[]) => {
        this.commentsWithASubscribe = comments;
      });
    }
  }
}
