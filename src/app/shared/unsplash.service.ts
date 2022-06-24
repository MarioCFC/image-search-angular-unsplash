import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { SharedModule } from "./shared.module";
import { Observable } from "rxjs";

@Injectable()
export class UnsplashService {
  private readonly unsplashUrl: string = "https://api.unsplash.com/";
  private client_id = "UNSPLASHA_API_KEY";

  constructor(private http: HttpClient) {}

  query(url: string, parameters: HttpParams) {
    parameters = parameters.append("client_id", this.client_id);
    let options = {
      params: parameters,
    };

    return this.http.get(url, options);
  }


  searchImage(query: string) {
    let params = new HttpParams();
    params = params.append("query", query);

    let url = this.unsplashUrl + "search/photos";
    return this.query(url, params);
  }

  getImageDetails(idImage:string){
    let url = this.unsplashUrl + "photos/" + idImage;
    return this.query(url,null);

  }
}
