import { Injectable } from '@angular/core';
import { Screening } from './screening';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reservation } from './reservation';
import { httpOptions } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ScreeningService {

  private screeningUrl = 'http://localhost:8080/screenings';

  constructor(private http: HttpClient) { }


getScreenings(): Promise<Screening[]> {
    return this.http.get<Screening[]>(`${this.screeningUrl}`, httpOptions).toPromise();
}

getScreening(id: number): Promise<Screening> {
  return this.http.get<Screening>(`${this.screeningUrl}/${id}`, httpOptions).toPromise();
}

createScreening(screening: Screening): Promise<Screening> {
  return this.http.post<Screening>(`${this.screeningUrl}`, screening, httpOptions).toPromise();
}

updateScreening(screening: Screening): Promise<Screening> {
  return this.http.put<Screening>(`${this.screeningUrl}/${screening.id}`, screening, httpOptions).toPromise();
}

deleteScreening(id): Promise<Screening> {
  return this.http.delete<Screening>(`${this.screeningUrl}/${id}`, httpOptions).toPromise();
}

}
