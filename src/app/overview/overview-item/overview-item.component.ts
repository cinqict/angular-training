import { Component, Input } from '@angular/core';
import { Race } from '../../shared/races/races.model';

@Component({
  selector: 'app-overview-item',
  templateUrl: './overview-item.component.html',
  styleUrls: ['./overview-item.component.scss']
})
export class OverviewItemComponent {
  @Input() public race: Race | undefined;
}
