import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ZeroPadModule } from '../shared/zero-pad/zero-pad.module';
import { CommentsModule } from '../shared/comments/comments.module';

const routes: Routes = [
  {
    path: ':id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ZeroPadModule, CommentsModule],
  declarations: [DetailComponent]
})
export class DetailModule {}
