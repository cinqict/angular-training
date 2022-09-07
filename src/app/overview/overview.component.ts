import { Component, OnInit } from '@angular/core';
import { Race } from '../shared/races/races.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public title: string = 'Overview';
  public year: number = 2022;
  public races: Race[] = [];

  public ngOnInit(): void {
    this.races = [
      {
        name: 'Bahrain International Circuit',
        location: 'Bahrain',
        date: '2022-03-20'
      },
      {
        name: 'Saudi Arabian Grand Prix',
        location: 'Saudi Arabia',
        date: '2022-03-27'
      },
      {
        name: 'Albert Park Grand Prix Circuit',
        location: 'Australia',
        date: '2022-04-10'
      }
    ];
  }
}
