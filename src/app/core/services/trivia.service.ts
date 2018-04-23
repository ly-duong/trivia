import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of'


@Injectable()
export class TriviaService {

  constructor(private http:HttpClient) { }

  public getCategories(){

  }

  public getQuestions(){
    
  }
}
