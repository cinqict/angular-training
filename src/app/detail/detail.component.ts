import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CommentType } from '../shared/comments/comment.model';
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
  public commentType: CommentType = 'all';

  constructor(private readonly route: ActivatedRoute, private readonly racesService: RacesService, private readonly router: Router) {}

  public ngOnInit(): void {
    this.raceId = +this.route.snapshot.params['id'];
    if (this.raceId) {
      this.racesService.getRace(this.raceId).subscribe((race: Race) => (this.race = race));
    }

    this.router.events.pipe(filter((event: Event) => event instanceof NavigationEnd)).subscribe(() => {
      this.definePathType();
    });

    this.definePathType();
  }

  private definePathType(): void {
    if (this.route.snapshot.children.length) {
      this.commentType = this.route.snapshot.children[0].url[0].path as CommentType;
    } else {
      this.commentType = 'all';
    }
  }
}
