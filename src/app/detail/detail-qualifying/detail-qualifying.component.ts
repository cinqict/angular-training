import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QualifyingResult, Race } from '../../shared/races/races.model';
import { RacesService } from '../../shared/races/races.service';

@Component({
  selector: 'app-detail-qualifying',
  templateUrl: './detail-qualifying.component.html',
  styleUrls: ['./detail-qualifying.component.scss']
})
export class DetailQualifyingComponent implements OnInit {
  private raceId: number | undefined;
  private currentPath: string | undefined;
  public qualifyingResult: QualifyingResult[] = [];
  constructor(private readonly route: ActivatedRoute, private readonly racesService: RacesService) {}

  public ngOnInit(): void {
    this.raceId = +this.route.snapshot.parent?.params['id'];
    this.currentPath = this.route.routeConfig?.path;

    if (this.currentPath === 'qualifying' && this.raceId) {
      this.racesService.getResults(this.raceId, 'qualifying').subscribe((response: Race) => {
        if (response.QualifyingResults) {
          this.qualifyingResult = response.QualifyingResults;
        }
      });
    }
  }
}
