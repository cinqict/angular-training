import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Race } from '../shared/races/races.model';
import { RacesService } from '../shared/races/races.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public title: string = 'Overview';
  public year: number = 2022;
  public races: Observable<Race[]> = of([]);

  constructor(private readonly racesService: RacesService) {}

  public ngOnInit(): void {
    this.races = this.racesService.getRaces();
  }
}
