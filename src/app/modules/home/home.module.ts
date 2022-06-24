import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSearcherComponent } from './home-searcher/home-searcher.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeSearcherComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
