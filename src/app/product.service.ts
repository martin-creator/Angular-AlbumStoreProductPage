import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
//import rxjs/add/operator/map;
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  private _albumUrl : string = "../assets/album.json";

  constructor(private _http: Http) { }

  getAlbum(id:number){

    return pipe(this._http.get(this._albumUrl)
    .map(response, response.json()));


  }

}
