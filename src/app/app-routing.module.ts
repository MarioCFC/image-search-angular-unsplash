import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'searcher', loadChildren: () => import('./modules/images/image.module').then(m => m.ImageModule) },
  { path: '', redirectTo: 'searcher', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
