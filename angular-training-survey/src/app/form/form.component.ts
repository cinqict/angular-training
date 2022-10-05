import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  public categoryId: number | undefined;
  public subCategoryId: number | undefined;
  public form: FormGroup | undefined;
  public isChild: boolean = false;

  private readonly subscriptions: Subscription = new Subscription();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly formService: FormService
  ) {}

  public ngOnInit(): void {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { categoryId = undefined, subCategoryId = undefined } = this.route.snapshot.params;
    this.categoryId = +categoryId;
    this.subCategoryId = +subCategoryId;
    this.initDefaultForm();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initDefaultForm(): void {
    this.form = this.formBuilder.group({
      firstname: this.formBuilder.control(null),
      lastname: this.formBuilder.control(null),
      information: this.formBuilder.control(null),
      ...this.extraFieldsBySettings()
    });
    this.checkForAge();
  }

  private extraFieldsBySettings(): { [key: string]: FormControl } {
    if (this.categoryId === 1 && this.subCategoryId === 1) {
      return {
        age: this.formBuilder.control(null)
      };
    }

    if (this.categoryId === 2 && this.subCategoryId === 2) {
      return {
        age: this.formBuilder.control(null),
        email: this.formBuilder.control(null)
      };
    }

    return {};
  }

  private checkForAge(): void {
    this.subscriptions.add(
      this.form?.get('age')?.valueChanges.subscribe((age: number) => {
        this.isChild = age < 18;

        if (this.isChild) {
          this.form?.addControl('ageCheck', new FormControl(false, Validators.requiredTrue));
        } else {
          this.form?.removeControl('ageCheck');
        }
      })
    );
  }

  public onSubmit(): void {
    this.subscriptions.add(
      this.formService.sendToApi(this.form?.getRawValue()).subscribe({
        next: () => {
          console.log('Success');
          this.form?.reset();
        },
        error: () => {
          console.log('Er is iets fout gegaan');
        }
      })
    );
  }
}
