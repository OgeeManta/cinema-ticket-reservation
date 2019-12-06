import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Auditorium } from './auditorium';
import { Screening } from './screening';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuditoriumService {

  private auditoriumUrl = 'http://localhost:8080/auditoriums';

  constructor(private http: HttpClient) { }


getAuditoriums(): Promise<Auditorium[]> {
  return this.http.get<Auditorium[]>(`${this.auditoriumUrl}`, httpOptions).toPromise();
}

getAuditorium(id: number): Promise<Auditorium> {
  return this.http.get<Auditorium>(`${this.auditoriumUrl}/${id}`, httpOptions).toPromise();
}

getScreenings(id: number): Promise<Screening[]> {
  return this.http.get<Screening[]>(`${this.auditoriumUrl}/${id}/screenings`,httpOptions).toPromise();
}

}
