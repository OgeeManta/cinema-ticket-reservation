import { Injectable } from '@angular/core';
import { Movie } from "./movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = [
    {
      id: 1,
      title: 'Lion King',
      description: 'Good',
      runtime: 110,
    },
    {
      id: 2,
      title: 'Lion King again',
      description: 'Very Good',
      runtime: 98,
    },
    {
      id: 3,
      title: 'P',
      description: 'Bad',
      runtime: 10,
    },
    {
      id: 4,
      title: 'PC5',
      description: 'Bad',
      runtime: 300,
    },
  ];

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }
  
  getMovie(id:number): Movie {
    return this.movies.find(i => i.id == id);
  }
}
