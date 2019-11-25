import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { ReservationService } from '../reservation.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  
  public movie: Movie = null;

  public discounted: number;
  public full: number;

  public categories: Category[] = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private sanitizer: DomSanitizer,
    private reservationService: ReservationService,
    private categoryService: CategoryService
  ) {  }
  
  async ngOnInit(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movie = await this.movieService.getMovie(id);

    this.reservationService.currentDiscounted.subscribe(discounted => this.discounted = discounted);
    this.reservationService.currentFull.subscribe(full => this.full = full);

    this.categories = await this.categoryService.getCategories();
  }

  setDiscountedAndFull(dc: number,full: number) {
    this.discounted = dc;
    this.full = full;
    this.reservationService.changeDiscounted(this.discounted);
    this.reservationService.changeFull(this.full)
  }

  updateVideoUrl(id: string):  SafeResourceUrl{
    const dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
  }
  
}