import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {
  @Input() config: any
  calendarItems: any [] = []

  constructor() {
  }

  ngOnInit() {
    this.setItems()
  }

  getNumberOfDays(year: number, month: number) {
    return new Date(year, month, 0).getDate()
  }

  setItems() {
    for (let month = 1; month <= 12; month++) {
      for (let date = 1; date <= this.getNumberOfDays(2018, month); date++) {
        debugger
        console.log(new Date(2018, month, date))
      }
    }
  }

  generateCalendar() {
  }

  /*
  date = new Date(event.commit.committer.date)
  console.log(new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date))
  */
}
