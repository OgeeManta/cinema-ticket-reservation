import { Injectable } from '@angular/core';
import { Reservation } from "./reservation";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
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
export class ReservationService {

  private reservationUrl = 'http://localhost:8080/reservation';

  private discountedSource = new BehaviorSubject(0);
  currentDiscounted = this.discountedSource.asObservable();

  private fullSource = new BehaviorSubject(0);
  currentFull = this.fullSource.asObservable();

  private screeningIdSource = new BehaviorSubject(0);
  currentScreeningId = this.screeningIdSource.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  changeDiscounted(discounted: number){
    this.discountedSource.next(discounted);
  }

  changeFull(full: number){
    this.fullSource.next(full);
  }

  changeScreeningId(screening_id: number){
    this.screeningIdSource.next(screening_id);
  }

getReservations(): Promise<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.reservationUrl}`, httpOptions).toPromise();
}

getReservation(id: number): Promise<Reservation> {
  return this.http.get<Reservation>(`${this.reservationUrl}/${id}`, httpOptions).toPromise();
}

createReservation(reservation: Reservation, screening_id: number): Promise<Reservation> {
  return this.http.post<Reservation>(`${this.reservationUrl}/${screening_id}`, reservation, httpOptions).toPromise();
}

updateReservation(reservation: Reservation): Promise<Reservation> {
  return this.http.put<Reservation>(`${this.reservationUrl}/${reservation.id}`, reservation, httpOptions).toPromise();
}

deleteReservation(id): Promise<Reservation> {
  return this.http.delete<Reservation>(`${this.reservationUrl}/${id}`, httpOptions).toPromise();
}

}
