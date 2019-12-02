import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Category } from './category';
//import { httpOptions } from './auth.service';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUrl = 'http://localhost:8080/category';

  constructor(private http: HttpClient,) { }

  getCategories(): Promise<Category[]> {
    return this.http.get<Category[]>(`${this.categoryUrl}`, httpOptions).toPromise();
  }

  getCategory(id: number): Promise<Category> {
    return this.http.get<Category>(`${this.categoryUrl}/${id}`, httpOptions).toPromise();
  }
}
