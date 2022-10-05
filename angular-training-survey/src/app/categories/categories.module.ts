import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from '../shared/card/card.module';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  }
];

@NgModule({
  declarations: [CategoriesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CardModule],
  exports: [CategoriesComponent]
})
export class CategoriesModule {}
