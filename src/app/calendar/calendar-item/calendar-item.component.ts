import { Component, OnInit, Input } from '@angular/core';
import {CalendarItem} from 'src/app/calendar/calendar.component';

@Component({
  selector: 'calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.sass']
})
export class CalendarItemComponent implements OnInit {
  @Input() calendarItem: CalendarItem
  popUpVisibility: string = 'none'

  constructor() { }

  ngOnInit() {
  }

  togglePopUp(event: MouseEvent) {
    if(event.type == "mouseenter") {
      this.popUpVisibility = 'block'
    } else if(event.type == "mouseleave") {
      this.popUpVisibility = 'none'
    }
  }

}
