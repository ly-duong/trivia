import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { TriviaCategory } from '../models';


@Injectable()
export class TriviaService {
  constructor(private http: HttpClient) { }

  public getCategories(): Observable<TriviaCategory> {
    const CATEGORY_URL = 'https://opentdb.com/api_category.php';

    return this.http.get(CATEGORY_URL)
    .map((response: any) => {
      return response.trivia_categories;
    })
    .catch(error => {
      console.error('ERROR: ', error);
      return error;
    });
  }

  public getQuestions() {

  }
}
