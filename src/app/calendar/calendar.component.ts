import { Component, Input, SimpleChanges } from '@angular/core';
import { Commit, Response } from '../config/config.service';

export interface CommitsRequest {
  year: number;
  repoUrl: string;
}

export interface CalendarItem {
  date: Date;
  commits: any[];
  percent: number;
}

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent {
  @Input() response: Response

  public calendarItems: CalendarItem[]
  public collection: Commit[]

  // Define a lifecycle hook to handle changes to the component's input
  public ngOnChanges(changes: SimpleChanges) {
    if(changes.response && changes.response.currentValue) {
      // When the response changes, fetch the commits and update the calendar items
      this.response.commits.then((commits: Commit[]) => {
        this.collection = commits
        this.setItems(this.response.year).appendCommits(commits)
      })
    }
  }

  // A method to append commits to the calendar items
  public appendCommits(commits: Commit[]): void {
    this.calendarItems.forEach((calendarItem: CalendarItem, idx: number) => {
      const commitsTmp: string[] = []
      // For each calendar item, find any commits that occurred on that date
      commits.forEach(({ commit: { committer: { date }}}) => {
        if(date.substring(0,10) == calendarItem.date.toISOString().substring(0,10)) {
          commitsTmp.push(date)
          this.calendarItems[idx].commits = commitsTmp
          this.calendarItems[idx].percent = Number.parseFloat(((commitsTmp.length / commits.length) * 100).toPrecision(2))
        }
      })
    })
  }

  // A method to initialize the calendar items for a given year
  public setItems(year: number): CalendarComponent {
    this.calendarItems = []
    for (let month = 1; month <= 12; month++) {
      const numberOfDays: number = new Date(year, month, 0).getDate();
      // For each month in the year, create calendar items for each day of the month
      for (let date = 1; date <= numberOfDays; date++) {
        const dateValue: Date = new Date(year, (month-1), date)
        this.calendarItems.push({
          date: dateValue,
          commits: [],
          percent: 0,
        })
      }
    }
    return this
  }

}
