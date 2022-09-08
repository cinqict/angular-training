import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const forbiddenValidator =
  (word: string): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    let isForbidden = false;
    try {
      isForbidden = control.value.includes(word);
    } catch (error) {
      isForbidden = false;
    }
    return isForbidden ? { forbidden: { value: true } } : null;
  };
