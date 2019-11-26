import { Category } from './category';

export class Movie {

    id: number = 0;
    image: string = '';
    trailer: string = '';
    title: string = '';
    description: string = '';
    runtime: number = 0;
    categories: Array<Category>;
}
