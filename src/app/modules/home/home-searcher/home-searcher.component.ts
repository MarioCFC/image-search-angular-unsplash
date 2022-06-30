import { Component, OnInit } from '@angular/core';
import { IPage } from 'src/app/shared/models-interfaces/IPage';
import { Result } from 'src/app/shared/models-interfaces/IResult';
import { UnsplashService } from 'src/app/shared/unsplash.service';

@Component({
  selector: 'app-home-searcher',
  templateUrl: './home-searcher.component.html',
  styleUrls: ['./home-searcher.component.css']
})
export class HomeSearcherComponent implements OnInit {

  private imagePageData:IPage;
  private actualQuery:string;
  private actualPage:number = 1;

  constructor(private service:UnsplashService) {
  }


  ngOnInit() {
  }


  searchImage(query:string,page:number){
    this.service.searchImage(query,page).subscribe(
      resp=>{
        this.imagePageData = resp;
        //TODO:Mirar lo del atributo results
      },
      error=>{
        console.log("Error caborn")
      }
    )
  }

  //When the query arrives it will be validated
  
  getSearchEvent(newQuery:string){
    this.actualQuery = newQuery
    this.actualPage = 1;
    this.searchImage(newQuery,this.actualPage);
  }

  onActualPageChange(newPage:number){
    this.actualPage = newPage;
    this.searchImage(this.actualQuery,newPage);
  }


}
