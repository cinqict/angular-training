import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { OverviewItemComponent } from './overview-item/overview-item.component';

@NgModule({
  declarations: [OverviewComponent, OverviewItemComponent],
  imports: [CommonModule],
  exports: [OverviewComponent]
})
export class OverviewModule {}
