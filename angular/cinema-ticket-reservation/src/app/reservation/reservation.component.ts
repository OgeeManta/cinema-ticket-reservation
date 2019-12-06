import { Reservation } from "../reservation";

import { ReservationService } from '../reservation.service';
import { MovieService } from '../movie.service';

import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnChanges, Input, Output, EventEmitter  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from '../movie';
import { Screening } from '../screening';
import { ScreeningService } from '../screening.service';
import { AuditoriumService } from '../auditorium.service';
import { Auditorium } from '../auditorium';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnChanges {

  private reservations: Reservation[];

  public movie: Movie = null;
  public screeningDate: string = '';
  private discounted: number;
  private full: number;
  private price: number;
  private screening_id: number;

  private screening: Screening;
  private auditorium: Auditorium;

  private auditoriums: Auditorium[];
  private auditoriumScreenings: Screening[];

  @Input() reservation : Reservation;
  public model : Reservation = <Reservation> {};
  @Output() onSubmit = new EventEmitter<Reservation>();
  pipe: any;

  popUpOpen = false;
  popUpOpenBad = false;

  openPopUp() {
    this.popUpOpen = true;
  }

  openPopUpBad(){
    this.popUpOpenBad = true;
  }

  backOption() {
    this.popUpOpen = false;
    this.router.navigate(['/']);
  }

  constructor(
    private reservationService: ReservationService,
    private screeningService: ScreeningService,
    private auditoriumService: AuditoriumService,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {  }

    async ngOnInit(): Promise<void> {
      const id = +this.route.snapshot.paramMap.get('id');
      this.movie = await this.movieService.getMovie(id);

      this.reservationService.currentDiscounted.subscribe(discounted => this.discounted = discounted);
      this.reservationService.currentFull.subscribe(full => this.full = full);
      this.reservationService.currentScreeningId.subscribe(screening_id => this.screening_id = screening_id);

      this.screening = await this.screeningService.getScreening(this.screening_id);
      this.auditoriums = await this.auditoriumService.getAuditoriums();

      for(var i=1;i<=this.auditoriums.length;i++){
        this.auditoriumScreenings = await this.auditoriumService.getScreenings(i);
        //console.log(this.auditoriumScreenings);
        for(var j=0;j<this.auditoriumScreenings.length;j++){
          //console.log(this.auditoriumScreenings[j]);
          if(this.screening_id == this.auditoriumScreenings[j].id){
            this.auditorium = await this.auditoriumService.getAuditorium(i);
            break;
          }
        }
      }

      //console.log(this.auditorium);
      this.pipe = new DatePipe('en-US');
      this.screeningDate = this.pipe.transform(this.screening.dateofscreening, 'medium');
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

    if(currentSeats <= this.auditorium.seats){
      this.reservationService.createReservation(this.model,this.screening_id);
      this.openPopUp();
    }else{
      this.openPopUpBad();
    }

    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }

}
