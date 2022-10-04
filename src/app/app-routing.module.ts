import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./overview/overview.module').then((m: typeof import('./overview/overview.module')) => m.OverviewModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail/detail.module').then((m: typeof import('./detail/detail.module')) => m.DetailModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
