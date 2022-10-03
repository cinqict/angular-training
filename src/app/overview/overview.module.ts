import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { RouterModule, Routes } from '@angular/router';
import { RacesSummaryModule } from '../shared/races/races-summary/races-summary.module';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  }
];

@NgModule({
  declarations: [OverviewComponent],
  imports: [CommonModule, RouterModule.forChild(routes), RacesSummaryModule]
})
export class OverviewModule {}
