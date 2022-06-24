import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSearcherComponent } from './home-searcher/home-searcher.component';


const routes: Routes = [
  {
    path : '',
    component: HomeSearcherComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
