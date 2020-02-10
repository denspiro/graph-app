import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

export interface Response {
  year: number;
  commits: Promise<Object>;
}

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
export class CalendarComponent implements OnInit {
  @Input() response: Response

  calendarItems: CalendarItem[]
  collection: any[]

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.response && changes.response.currentValue) {
      this.response.commits.then((commits: any[]) => {
        this.collection = commits
        this.setItems(this.response.year).appendCommits(commits)
      })
    }
  }

  appendCommits(commits: any[]): void {
    this.calendarItems.forEach((calendarItem: CalendarItem, idx: number) => {
      let commitsTmp = []
      commits.forEach((commitData:any) => {
        if(commitData.commit.committer.date.substring(0,10) == calendarItem.date.toISOString().substring(0,10)) {
          commitsTmp.push(commitData.commit.committer.date)
          this.calendarItems[idx].commits = commitsTmp
          this.calendarItems[idx].percent = Number.parseFloat((commitsTmp.length / commits.length).toPrecision(1))
        }
      })
    })
  }

  //Build items
  setItems(year: number): CalendarComponent {
    this.calendarItems = []
    let numberOfDays: number
    for (let month = 1; month <= 12; month++) {
      numberOfDays = new Date(year, month, 0).getDate()
      for (let date = 1; date <= numberOfDays; date++) {
        let dateValue = new Date(year, (month-1), date)
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
