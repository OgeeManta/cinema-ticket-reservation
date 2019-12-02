import { Reservation } from "../reservation";

import { ReservationService } from '../reservation.service';
import { MovieService } from '../movie.service';

import { ActivatedRoute } from '@angular/router';

import { Component, OnChanges, Input, Output, EventEmitter  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from '../movie';
import { Screening } from '../screening';
import { ScreeningService } from '../screening.service';
import { AuditoriumService } from '../auditorium.service';
import { Auditorium } from '../auditorium';

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
  private screening_id: number;

  private screening: Screening;
  private auditorum: Auditorium;

  @Input() reservation : Reservation;
  public model : Reservation = <Reservation> {};
  @Output() onSubmit = new EventEmitter<Reservation>();


  constructor(
    private reservationService: ReservationService,
    private screeningService: ScreeningService,
    private auditoriumService: AuditoriumService,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {  }

    async ngOnInit(): Promise<void> {
      const id = +this.route.snapshot.paramMap.get('id');
      this.movie = await this.movieService.getMovie(id);

      this.reservationService.currentDiscounted.subscribe(discounted => this.discounted = discounted);
      this.reservationService.currentFull.subscribe(full => this.full = full);
      this.reservationService.currentScreeningId.subscribe(screening_id => this.screening_id = screening_id);

      this.screening = await this.screeningService.getScreening(this.screening_id);

      var date = new Date();

      date = this.screening.dateofscreening;

      console.log(date);

      this.price = this.discounted*800 + this.full* 1200;
  }

  async ngOnChanges(): Promise<void> {
    this.model = Object.assign({}, this.reservation);
  }

  async submit(form: NgForm): Promise<void> {
    this.model.firstname = form.value.firstnameText;
    this.model.lastname = form.value.lastnameText;
    this.model.screening = await this.screeningService.getScreening(this.screening_id);
    this.model.normalseats = this.full;
    this.model.studentseats = this.discounted;
    this.model.price = this.price;
    this.model.phone = form.value.phoneText;
    let currentSeats = +this.discounted + +this.full;
    for(var i=0;i<this.screening.reservations.length;i++){
      currentSeats = +currentSeats + +this.screening.reservations[i].studentseats + +this.screening.reservations[i].normalseats;
    }
    console.log(currentSeats);
    
    this.auditorum = await this.auditoriumService.getAuditorium(1);

    console.log(this.auditorum.seats);

    if(currentSeats <= this.auditorum.seats){
      this.reservationService.createReservation(this.model,this.screening_id);
    }else{
      console.log("Sorry but there are not enough seats for your reservation.")
    }


    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }

}
