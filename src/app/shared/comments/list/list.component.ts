import { Component, Input, OnChanges } from '@angular/core';
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

  public comments: Observable<Comment[]> = of([]);

  constructor(private readonly commentsService: CommentsService) {}

  public ngOnChanges(): void {
    if (this.raceId) {
      this.comments = this.commentsService.getComments(this.raceId, this.type);
    }
  }
}
