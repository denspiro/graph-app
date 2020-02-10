import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.sass']
})
export class CalendarItemComponent implements OnInit {
  @Input() calendarItem: any

  constructor() { }

  ngOnInit() {
  }

}
