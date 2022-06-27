import { Component, OnInit } from '@angular/core';
import { UnsplashService } from 'src/app/shared/unsplash.service';

@Component({
  selector: 'app-home-searcher',
  templateUrl: './home-searcher.component.html',
  styleUrls: ['./home-searcher.component.css']
})
export class HomeSearcherComponent implements OnInit {

  constructor(private service:UnsplashService) {
  }


  ngOnInit() {
   /* this.service.getImageDetails("wtZgw1nQ3FI").subscribe(
      images=> {
        var a = images;
      },
      error=> console.log("Hola")


    )*/
  }

  searchImage(query){
    this.service.searchImage(query).subscribe(
      resp=>{
        console.log(resp)
      },
      error=>{
        console.log("Error caborn")
      }
    )
  }

  //When the query arrives it will be validated
  getSearchEvent(query:string){
    this.searchImage(query);
  }

}
