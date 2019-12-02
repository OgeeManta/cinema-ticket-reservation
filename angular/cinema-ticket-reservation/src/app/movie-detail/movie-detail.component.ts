import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { ReservationService } from '../reservation.service';
import { ScreeningService } from '../screening.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { Screening } from '../screening';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  
  public movie: Movie = null;
  public screenings: Screening[] = null;
  public screening: Screening = null;

  public discounted: number;
  public full: number;
  public screening_id: number;
  radioSelected: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private sanitizer: DomSanitizer,
    private reservationService: ReservationService,
    private screeningService: ScreeningService
  ) {  }
  
  async ngOnInit(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movie = await this.movieService.getMovie(id);

    console.log(this.screenings);

    this.reservationService.currentDiscounted.subscribe(discounted => this.discounted = discounted);
    this.reservationService.currentFull.subscribe(full => this.full = full);
    this.reservationService.currentScreeningId.subscribe(screening_id => this.screening_id = screening_id);
  }

  setDiscountedAndFullAndScreening(dc: number,full: number) {
    this.discounted = dc;
    this.full = full;
    this.screening_id = this.getScreeningIdByDate();
    this.reservationService.changeDiscounted(this.discounted);
    this.reservationService.changeFull(this.full);
    this.reservationService.changeScreeningId(this.screening_id);
  }

  getScreeningIdByDate(){
    var screening: Screening;
    for(var i=0;i<this.movie.screenings.length;i++){
      if(this.movie.screenings[i].dateofscreening == this.radioSelected){
        screening = this.movie.screenings[i];
      }
    }
    return screening.id;
  }

  updateVideoUrl(id: string):  SafeResourceUrl{
    const dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
  }
  
}