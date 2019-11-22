import { Reservation } from "../reservation";

import { ReservationService } from '../reservation.service';

import { Component, OnChanges, Input, Output, EventEmitter  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnChanges {

  private reservations: Reservation[];

  @Input() reservation : Reservation;
  public model : Reservation = <Reservation> {};
  @Output() onSubmit = new EventEmitter<Reservation>();

  constructor(
    private reservationService: ReservationService,
    //private movieListComponent: MovieListComponent    itt NULL_INJECTION hiba
  ) { }

    async ngOnInit(): Promise<void> {
  }

  async ngOnChanges(): Promise<void> {
    this.model = Object.assign({}, this.reservation);
  }

  async submit(form: NgForm): Promise<void> {
    //console.log(this.movieListComponent.getStaticSelectedMovie().title)
    this.model.firstname = form.value.firstname;
    this.model.lastname = form.value.lastname;
    this.model.normalseats = 0;
    this.model.studentseats = 0;
    this.model.price = 0;
    this.model.fromseat = 0;
    this.model.phone = form.value.phone;
    this.reservationService.createReservation(this.model);
    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }

}
