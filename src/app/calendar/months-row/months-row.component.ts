import { Component, Input } from '@angular/core';

@Component({
  selector: 'months-row',
  templateUrl: './months-row.component.html',
  styleUrls: ['./months-row.component.sass']
})
export class MonthsRowComponent {
  private _month: string

  @Input()
  public set calendarMonth(date: Date) {
    this._month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date)
  }

  public get month(): string {
    return this._month
  }
}
