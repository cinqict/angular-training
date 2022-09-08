import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Race } from '../shared/races/races.model';
import { RacesService } from '../shared/races/races.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public raceId: number | undefined;
  public race: Race | undefined;

  constructor(private readonly route: ActivatedRoute, private readonly racesService: RacesService) {}

  public ngOnInit(): void {
    this.raceId = +this.route.snapshot.params['id'];

    if (this.raceId) {
      this.racesService.getRace(this.raceId).subscribe((race: Race) => (this.race = race));
    }
  }
}
