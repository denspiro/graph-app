import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Response } from 'src/app/calendar/calendar.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.sass']
})
export class AppViewComponent implements OnInit {
  response: Response
  requestForm = new FormGroup({
    year: new FormControl('2019', Validators.required),
    repoUrl: new FormControl('https://github.com/angular/angular', Validators.required),
  })

  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
    this.getCommits()
  }

  urlToLocation(repoUrl: string) {
    return repoUrl.replace("https://github.com/", "")
  }

  getCommits() {
    let sinceDate: Date = new Date(this.requestForm.value.year, 0, 1)
    let untilDate: Date = new Date((this.requestForm.value.year + 1), 0, 1)
    this.configService.getData(this.urlToLocation(this.requestForm.value.repoUrl), sinceDate, untilDate).subscribe((commits: any[]) => {
      this.response = {
        year: this.requestForm.value.year,
        commits: new Promise((resolve) => resolve(commits))
      }
    })
  }

}
