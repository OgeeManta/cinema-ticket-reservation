import { Injectable } from '@angular/core';
import { Movie } from "./movie";

//import * as myImage from 'C:/Users/betum/Desktop/git/ctr/angular/cinema-ticket-reservation/lionKing.jpg';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getIssues(): any {
    throw new Error("Method not implemented.");
  }

  movies: Movie[] = [
    {
      id: 1,
      image: 'assets/lionKing.jpg',
      title: 'Lion King',
      description: "A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father's death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.",
      runtime: 110,
    },
    {
      id: 2,
      image: 'assets/lionKing2.jpg',
      title: 'Lion King 2',
      description: 'Very Good',
      runtime: 98,
    },
    {
      id: 3,
      image: 'assets/holyGrail.jpg',
      title: 'Monty Python and the Holy Grail',
      description: 'Very Good',
      runtime: 92,
    },
    {
      id: 4,
      image: 'assets/lionKing.jpg',
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
