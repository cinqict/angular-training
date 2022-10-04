import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Comment, CommentType } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private readonly commentSubject: BehaviorSubject<Comment[]> = new BehaviorSubject<Comment[]>([]);

  public saveComments(comment: Comment): void {
    const prevComments = this.commentSubject.getValue();
    const nextComments = [...prevComments, comment];
    this.commentSubject.next(nextComments);
  }

  public getComments(raceId: number, type: CommentType): Observable<Comment[]> {
    return this.commentSubject.asObservable().pipe(
      map((allComments: Comment[]) =>
        allComments.filter((comment: Comment) => {
          const isCommentToRaceAndType = comment.raceId === raceId && comment.type === type;
          return isCommentToRaceAndType;
        })
      )
    );
  }
}
