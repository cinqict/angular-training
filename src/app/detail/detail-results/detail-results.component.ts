import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Race, Result } from '../../shared/races/races.model';
import { RacesService } from '../../shared/races/races.service';

@Component({
  selector: 'app-detail-results',
  templateUrl: './detail-results.component.html',
  styleUrls: ['./detail-results.component.scss']
})
export class DetailResultsComponent implements OnInit {
  private raceId: number | undefined;
  private currentPath: string | undefined;
  public raceResult: Result[] = [];
  constructor(private readonly route: ActivatedRoute, private readonly racesService: RacesService) {}

  public ngOnInit(): void {
    this.raceId = +this.route.snapshot.parent?.params['id'];
    this.currentPath = this.route.routeConfig?.path;

    if (this.currentPath === 'race' && this.raceId) {
      this.racesService.getResults(this.raceId, 'results').subscribe((response: Race) => {
        if (response.Results) {
          this.raceResult = response.Results;
        }
      });
    }
  }
}
