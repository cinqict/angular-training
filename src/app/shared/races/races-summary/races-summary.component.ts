import { Component, Input } from '@angular/core';
import { Race } from '../races.model';

@Component({
  selector: 'app-races-summary',
  templateUrl: './races-summary.component.html',
  styleUrls: ['./races-summary.component.scss']
})
export class RacesSummaryComponent {
  @Input() public race: Race | undefined;
  @Input() public showAsSummary: boolean = false;
}
