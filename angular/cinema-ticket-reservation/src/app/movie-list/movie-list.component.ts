import { Component, OnInit } from '@angular/core';
import { Movie } from "../movie";
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  constructor(
    private movieService: MovieService
  ) { 
    this.movies = movieService.getMovies();
  }

  ngOnInit() {
  }

}
