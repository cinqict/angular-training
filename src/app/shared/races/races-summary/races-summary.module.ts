import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacesSummaryComponent } from './races-summary.component';
import { DateTimeModule } from '../../date-time/date-time.module';
import { ZeroPadModule } from '../../zero-pad/zero-pad.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RacesSummaryComponent],
  imports: [CommonModule, DateTimeModule, ZeroPadModule, RouterModule],
  exports: [RacesSummaryComponent]
})
export class RacesSummaryModule {}
