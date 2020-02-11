import { Component, OnInit, Input } from '@angular/core';
import {CalendarItem} from 'src/app/calendar/calendar.component';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.sass']
})
export class PopUpComponent implements OnInit {
  @Input() calendarItem: CalendarItem

  constructor() { }

  ngOnInit() {
  }

}
