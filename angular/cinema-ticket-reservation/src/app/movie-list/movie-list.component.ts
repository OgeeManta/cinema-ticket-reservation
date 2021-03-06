import { Component, OnInit } from '@angular/core';
import { Movie } from "../movie";
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  public static selectedMovie: Movie;
  public selectedMovie: Movie

  private movies: Movie[] = [];

  constructor(
    private movieService: MovieService
  ) { 
  }

  getSelectedMovie() : Movie{
    return this.selectedMovie;
  }

  async ngOnInit() : Promise<void>{
    this.movies = await this.movieService.getMovies();
  }

  onSelectMovie(movie: Movie): void {
    MovieListComponent.selectedMovie = movie;
    this.selectedMovie = movie;
  }

  getStaticSelectedMovie(){
    return MovieListComponent.selectedMovie;
  }

  

}
