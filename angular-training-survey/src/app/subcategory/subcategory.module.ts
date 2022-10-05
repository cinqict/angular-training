import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoryComponent } from './subcategory.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../shared/card/card.module';

const routes: Routes = [
  {
    path: '',
    component: SubcategoryComponent
  }
];

@NgModule({
  declarations: [SubcategoryComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CardModule],
  exports: [SubcategoryComponent]
})
export class SubcategoryModule {}
