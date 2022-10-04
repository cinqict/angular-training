import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Race, SprintResult } from '../../shared/races/races.model';
import { RacesService } from '../../shared/races/races.service';

@Component({
  selector: 'app-detail-sprint',
  templateUrl: './detail-sprint.component.html',
  styleUrls: ['./detail-sprint.component.scss']
})
export class DetailSprintComponent implements OnInit {
  private raceId: number | undefined;
  private currentPath: string | undefined;
  public sprintResult: SprintResult[] = [];
  constructor(private readonly route: ActivatedRoute, private readonly racesService: RacesService) {}

  public ngOnInit(): void {
    this.raceId = +this.route.snapshot.parent?.params['id'];
    this.currentPath = this.route.routeConfig?.path;

    if (this.currentPath === 'sprint' && this.raceId) {
      this.racesService.getResults(this.raceId, 'sprint').subscribe((response: Race) => {
        if (response.SprintResults) {
          this.sprintResult = response.SprintResults;
        }
      });
    }
  }
}
