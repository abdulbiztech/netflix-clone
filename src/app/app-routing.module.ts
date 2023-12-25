import { BrowseComponent } from './browse/browse.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./login/login.component').then((a) => a.LoginComponent),
  },
  {
    path: 'browse',
    loadComponent: () =>
      import('./browse/browse.component').then((a) => a.BrowseComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
