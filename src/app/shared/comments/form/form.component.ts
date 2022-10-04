import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comment, CommentType } from '../comment.model';
import { CommentsService } from '../comments.service';
import { forbiddenValidator } from './form-forbidden.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() public raceId: number | undefined;
  @Input() public type: CommentType = 'all';

  public form: FormGroup = new FormGroup({});
  public commentControl: FormControl = new FormControl();

  constructor(private readonly commentsService: CommentsService) {}

  public ngOnInit(): void {
    this.commentControl = new FormControl(null, [Validators.required, forbiddenValidator('soccer')]);
    this.form = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null),
      age: new FormControl(null),
      email: new FormControl(null),
      comment: this.commentControl
    });

    // listen to specific form control
    this.commentControl.valueChanges.subscribe((value: string) => {
      console.log(value);
    });
  }

  public onSubmit(): void {
    const values: Comment = { ...this.form.getRawValue(), raceId: this.raceId, type: this.type };
    this.commentsService.saveComments(values);
    this.form.reset();
  }
}
