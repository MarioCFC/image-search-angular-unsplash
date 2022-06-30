import { Component, OnInit } from '@angular/core';
import { IPage } from 'src/app/shared/models-interfaces/IPage';
import { UnsplashService } from 'src/app/shared/unsplash.service';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-image-searcher',
  templateUrl: './image-searcher.component.html',
  styleUrls: ['./image-searcher.component.css']
})


export class ImageSearcherComponent implements OnInit {

  private imagePageData:IPage;
  private actualQuery:string;
  private actualPage:number = 1;

  constructor(private service:UnsplashService,private router: Router, private route: ActivatedRoute) {
  }

  goToImageDetais(id:string) {
    this.router.navigate([`searcher/image/${id}`]);
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
