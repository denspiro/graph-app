import { Component, OnInit, Input, ViewChild, Renderer2, ElementRef } from '@angular/core';

interface MonthModel {
  month: string;
  numberOfDays: number;
  daysNames: string[];
}

interface DateModel {
  year: number;
  months: MonthModel [];
}

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {
  @Input() collection: any
  @ViewChild('svgContent', {static: true}) svgContent: ElementRef
  dateModel: DateModel
  year: number = 2018
  totalDays: number = 0

  constructor(private rederer: Renderer2) {
  }

  ngOnInit() {
    this.drawRectGoup()
  }

  getNumberOfDays(month: number) {
    return new Date(this.year, month, 0).getDate()
  }

  generateCalendar() {

  }

  drawRectGoup() {
    for(let month = 1; month <= 12; month++) {
      for(let i = 0; i < (month * 4.5); i++) {
        let group: any
        group = document.createElementNS('http://www.w3.org/2000/svg', "g")
        group.setAttributeNS(null, 'transform', `translate(${i * 15}, 0)`)
        this.rederer.appendChild(this.svgContent.nativeElement, group)
        this.drawRect(group)
      }
    }
  }

  drawRect(rectGroup: any) {
    for (let i = 0; i < 7; i++) {
      let rect = document.createElementNS('http://www.w3.org/2000/svg', "rect")
      rect.setAttributeNS(null, 'date-value', '12')
      rect.setAttributeNS(null, 'width', '12')
      rect.setAttributeNS(null, 'height', '12')
      rect.setAttributeNS(null, 'y', `${i * 15}`)
      rectGroup.appendChild(rect)
    }
  }

  /*
  date = new Date(event.commit.committer.date)
  console.log(new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date))
  */
}
