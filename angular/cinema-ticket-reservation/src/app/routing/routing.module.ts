import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from "../movie-list/movie-list.component";
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { ScreeningComponent } from '../screening/screening.component';
import { AuthGuard } from '../auth.guard';
import { LoginFormComponent } from '../login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MovieListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  },
  {
    path: 'reservation',
    component: ReservationComponent
  },
  {
    path: 'reservation/:id',
    component: ReservationComponent
  },
  {
    path: 'screenings',
    component: ScreeningComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }