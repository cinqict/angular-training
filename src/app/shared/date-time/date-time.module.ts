import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimeComponent } from './date-time.component';

@NgModule({
  declarations: [DateTimeComponent],
  imports: [CommonModule],
  exports: [DateTimeComponent]
})
export class DateTimeModule {}
