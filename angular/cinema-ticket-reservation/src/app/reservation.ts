import { Screening } from './screening';

export class Reservation {

    id: number = 0;
    screening: Screening;
    normalseats: number = 0;
    studentseats: number = 0;
    price: number = 0;
    fromseat: number = 0;
    firstname: string = '';
    lastname: string = '';
    phone: string = '';

}
