import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule, Routes } from '@angular/router';
import { CommentsModule } from '../shared/comments/comments.module';
import { RacesSummaryModule } from '../shared/races/races-summary/races-summary.module';
import { DetailQualifyingComponent } from './detail-qualifying/detail-qualifying.component';
import { DetailSprintComponent } from './detail-sprint/detail-sprint.component';
import { DetailResultsComponent } from './detail-results/detail-results.component';

const routes: Routes = [
  {
    path: ':id',
    component: DetailComponent,
    children: [
      {
        path: 'qualifying',
        component: DetailQualifyingComponent
      },
      {
        path: 'sprint',
        component: DetailSprintComponent
      },
      {
        path: 'race',
        component: DetailResultsComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), RacesSummaryModule, CommentsModule],
  declarations: [DetailComponent, DetailQualifyingComponent, DetailSprintComponent, DetailResultsComponent]
})
export class DetailModule {}
