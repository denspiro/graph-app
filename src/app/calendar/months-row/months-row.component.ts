import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'months-row',
  templateUrl: './months-row.component.html',
  styleUrls: ['./months-row.component.sass']
})
export class MonthsRowComponent implements OnInit {
  @Input()
  get calendarMonth() {
    return this._month
  }
  set calendarMonth(date: any) {
    this._month = new Intl.DateTimeFormat('en-US', {month: 'short'}).format(date)
  }
  private _month: string

  constructor() { }

  ngOnInit() {
  }

}
