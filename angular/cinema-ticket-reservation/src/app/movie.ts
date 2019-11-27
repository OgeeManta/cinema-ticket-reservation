import { Category } from './category';
import { Screening } from './screening';

export class Movie {

    id: number = 0;
    
    image: string = '';
    trailer: string = '';
    title: string = '';
    description: string = '';
    runtime: number = 0;
    screenings: Array<Screening>;
    categories: Array<Category>;
}
