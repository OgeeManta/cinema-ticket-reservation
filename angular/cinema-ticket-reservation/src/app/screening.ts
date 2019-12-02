import { Movie } from './movie';
import { Auditorium } from './auditorium'
import { Reservation } from './reservation';

export class Screening {

    id: number = 0;
    dateofscreening: Date = null;
    movie: Movie = null;
    auditorium: Auditorium = null;
    reservations: Array<Reservation>;

}
