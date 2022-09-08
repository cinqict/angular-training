import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { RouterModule, Routes } from '@angular/router';
import { OverviewItemComponent } from './overview-item/overview-item.component';
import { ZeroPadModule } from '../shared/zero-pad/zero-pad.module';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  }
];

@NgModule({
  declarations: [OverviewComponent, OverviewItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ZeroPadModule]
})
export class OverviewModule {}
