import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UnsplashService } from 'src/app/shared/unsplash.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  private imageDetails;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service:UnsplashService
  ) { }

  ngOnInit() {
    this.loadImageDetails();
  }

  loadImageDetails(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getImageDetails(id).subscribe(
      resp=>{
        this.imageDetails = resp;
      },
      error=>
        console.log("Error peticiones detalles")
      );
  }

}
