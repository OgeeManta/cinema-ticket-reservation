import { Reservation } from "../reservation";

import { ReservationService } from '../reservation.service';

import { Component, OnChanges, Input, Output, EventEmitter  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnChanges {

  private newReservation: Reservation;
  private reservations: Reservation[];

  @Input() reservation: Reservation
  public model: Reservation
  @Output() onSubmit = new EventEmitter<Reservation>();

  constructor(
    private reservationService: ReservationService
  ) { }

  async ngOnChanges(): Promise<void> {
    this.model = Object.assign({}, this.newReservation);
  }
/*
  onFormSubmit(reservation: Reservation): void {

      this.newReservation.firstname = reservation.firstname;
      this.newReservation.lastname = reservation.lastname;
      this.newReservation.phone = 'reservation.phone';
      this.newReservation.normalseats = reservation.normalseats;
      this.newReservation.studentseats = reservation.studentseats;
      this.newReservation.fromseat = reservation.fromseat;
      this.newReservation.price = reservation.price;
      this.reservationService.createReservation(reservation)
      .then(createdReservation => {
          this.reservations.push(createdReservation);
        });
    this.newReservation = null;
  }
  */

  submit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }

}
