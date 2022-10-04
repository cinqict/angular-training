import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent {
  @Input() public date: string | undefined;
  @Input() public time: string | undefined;
  @Input() public displayAs: 'datetime' | 'time' = 'datetime';
}
