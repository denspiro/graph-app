import { Component, Input } from '@angular/core';
import { CalendarItem } from 'src/app/calendar/calendar.component';

@Component({
  selector: 'calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.sass']
})
export class CalendarItemComponent {
  @Input() calendarItem: CalendarItem

  public popUpVisibility: boolean = false

}
