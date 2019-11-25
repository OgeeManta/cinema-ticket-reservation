import { Component, OnInit } from '@angular/core';
import { ScreeningService } from '../screening.service';
import { Screening } from '../screening';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.css']
})
export class ScreeningComponent implements OnInit {

  private screenings: Screening[] = [];

  constructor(private screeningService: ScreeningService) { }

  async ngOnInit() : Promise<void>{

    this.screenings = await this.screeningService.getScreenings();

  }

}
