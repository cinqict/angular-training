import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./categories/categories.module').then((m: typeof import('./categories/categories.module')) => m.CategoriesModule)
  },
  {
    path: 'cat/:categoryId',
    loadChildren: () =>
      import('./subcategory/subcategory.module').then((m: typeof import('./subcategory/subcategory.module')) => m.SubcategoryModule)
  },
  {
    path: 'cat/:categoryId/:subCategoryId',
    loadChildren: () => import('./form/form.module').then((m: typeof import('./form/form.module')) => m.FormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
