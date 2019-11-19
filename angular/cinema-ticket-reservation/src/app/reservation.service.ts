import { Injectable } from '@angular/core';
import { Reservation } from "./reservation";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservationUrl = 'http://localhost:8080/reservations';

  constructor(
    private http: HttpClient
  ) { }

getReservations(): Promise<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.reservationUrl}`, httpOptions).toPromise();
}

getReservation(id: number): Promise<Reservation> {
  return this.http.get<Reservation>(`${this.reservationUrl}/${id}`, httpOptions).toPromise();
}

createReservation(reservation: Reservation): Promise<Reservation> {
  return this.http.post<Reservation>(`${this.reservationUrl}`, reservation, httpOptions).toPromise();
}

updateReservation(reservation: Reservation): Promise<Reservation> {
  return this.http.put<Reservation>(`${this.reservationUrl}/${reservation.id}`, reservation, httpOptions).toPromise();
}

deleteReservation(id): Promise<Reservation> {
  return this.http.delete<Reservation>(`${this.reservationUrl}/${id}`, httpOptions).toPromise();
}

}
