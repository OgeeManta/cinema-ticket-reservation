import { Reservation } from "../reservation";

import { ReservationService } from '../reservation.service';
import { MovieService } from '../movie.service';

import { ActivatedRoute } from '@angular/router';

import { Component, OnChanges, Input, Output, EventEmitter  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from '../movie';

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnChanges {

  private reservations: Reservation[];

  public movie: Movie = null;
  private discounted: number;
  private full: number;
  private price: number;

  @Input() reservation : Reservation;
  public model : Reservation = <Reservation> {};
  @Output() onSubmit = new EventEmitter<Reservation>();

  constructor(
    private reservationService: ReservationService,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {  }

    async ngOnInit(): Promise<void> {
      const id = +this.route.snapshot.paramMap.get('id');
      this.movie = await this.movieService.getMovie(id);

      this.reservationService.currentDiscounted.subscribe(discounted => this.discounted = discounted);
      this.reservationService.currentFull.subscribe(full => this.full = full);

      this.price = this.discounted*800 + this.full* 1200;
  }

  async ngOnChanges(): Promise<void> {
    this.model = Object.assign({}, this.reservation);
  }

  async submit(form: NgForm): Promise<void> {
    this.model.firstname = form.value.firstname;
    this.model.lastname = form.value.firstname;
    this.model.normalseats = this.discounted;
    this.model.studentseats = this.full;
    this.model.price = this.discounted*800 + this.full* 1200;
    this.model.fromseat = 0;
    this.model.phone = form.value.phone;
    this.reservationService.createReservation(this.model);
    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }

}
