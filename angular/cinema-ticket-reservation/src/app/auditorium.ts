import { Screening } from './screening';

export class Auditorium {
    id: number = 0;
    auditoriumname: string = '';
    seats: number = 0;
    screenings: Array<Screening>;
}
