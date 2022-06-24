import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsplashService } from './unsplash.service';
import { HttpClientModule } from '@angular/common/http';


//TODO:Mirar si hay que declarar el servicio
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
  ],providers:[
    UnsplashService,
  ]
})
export class SharedModule { }
