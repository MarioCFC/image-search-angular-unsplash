import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { IPage } from "./models-interfaces/IPage";

@Injectable()
export class UnsplashService {
  private readonly unsplashUrl: string = "https://api.unsplash.com/";
  private client_id = "UNSPLASH_API_KEY";

  constructor(private http: HttpClient) {}

  searchImage(query: string, page:number) {
    let options = {
      params: new HttpParams().append("client_id", this.client_id).append("query", query).append("page",page.toString())
    };

    let url = this.unsplashUrl + "search/photos";
    return this.http.get<IPage>(url, options);
  }

  getImageDetails(idImage:string){


    let options = {
      params: new HttpParams().append("client_id", this.client_id)
    };

    let url = this.unsplashUrl + "photos/" + idImage;
    return this.http.get(url, options);

  }
}
