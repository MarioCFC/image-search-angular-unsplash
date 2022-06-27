import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UnsplashService } from "./unsplash.service";
import { HttpClientModule } from "@angular/common/http";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { MatFormFieldModule, MatIconModule, MatInputModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
//TODO:Mirar si hay que declarar el servicio
@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [SearchBarComponent],
  providers: [UnsplashService],
})
export class SharedModule {}
