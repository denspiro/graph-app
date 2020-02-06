import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.sass']
})
export class CalendarItemComponent implements OnInit, OnChanges {
  @Input() date: any
  @Input() collection: Promise<Object>
  commitInfo: any = []

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.collection && changes.collection.currentValue) {
        this.collection.then((value: any) => {
          value.forEach((cmt:any) => {
            if(cmt.commit.committer.date.substring(0,10) == this.date.date.substring(0,10)) {
              this.commitInfo.push(cmt.commit.committer.date)
            }
            //console.log(cmt.commit.committer.date.substrig(0,10) == this.date.date.substrig(0,10))
          })
        })
    }
  }

}
