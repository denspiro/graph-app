import { Component, OnInit } from '@angular/core';
import {ConfigService} from 'src/app/config/config.service';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {
  collection: Promise<Object>
  calendarItems: any [] = []
  sinceDate = new Date(2018, 0, 1)
  untilDate = new Date(2019, 0, 1)

  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
    this.setItems()
    this.configService.getData(this.sinceDate, this.untilDate).subscribe((commits: any) => {
      this.collection = new Promise((resolve) => resolve(commits))
    })
  }

  getNumberOfDays(year: number, month: number) {
    return new Date(year, month, 0).getDate()
  }

  setItems() {
    let numberOfDays: number
    for (let month = 1; month <= 12; month++) {
      numberOfDays = new Date(2018, month, 0).getDate()
      for (let date = 1; date <= numberOfDays; date++) {
        let dateValue = new Date(2018, (month-1), date).toISOString()
        this.calendarItems.push({
          date: dateValue,
        })
      }
    }
  }

}
