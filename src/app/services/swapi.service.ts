import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResult } from '../models/ListResult';

const API_URL = 'https://swapi.co/api/';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  getItemList(category: string, page: number = 1): Observable<ListResult> {
    return this.http.get<ListResult>(
      API_URL + (category === 'characters' ? 'people' : category),
      {
        params: { page: page.toString() },
      },
    );
  }

  getItemDetail(
    category: string,
    id: string,
    page: number = 1,
  ): Observable<Object> {
    return this.http.get(
      API_URL +
        (category === 'characters' ? 'people' : category) +
        '/' +
        id.toString(),
      {
        params: { page: page.toString() },
      },
    );
  }
}
