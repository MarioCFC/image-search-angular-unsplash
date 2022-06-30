import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { ImageSearcherComponent } from './image-searcher/image-searcher.component';


const routes: Routes = [
  {
    path : '',
    component: ImageSearcherComponent
  },
  {
     path: 'image/:id',
     component: ImageDetailsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageRoutingModule { }
