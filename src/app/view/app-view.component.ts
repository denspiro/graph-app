import { Component, OnInit } from '@angular/core';
import { ConfigService, Commit, Response } from '../config/config.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.sass']
})
export class AppViewComponent implements OnInit {
  public response: Response
  public requestForm = new FormGroup({
    year: new FormControl('2019', Validators.required),
    repoUrl: new FormControl('https://github.com/angular/angular', Validators.required),
  })

  constructor(private configService: ConfigService) {
  }

  public ngOnInit(): void {
    this.getCommits()
  }

  private urlToLocation(repoUrl: string): string {
    return repoUrl.replace("https://github.com/", "")
  }

  //Retrieves the commits for the given repository in the specified year
  public getCommits(): void {
    //Define since and until dates
    const sinceDate: Date = new Date(this.requestForm.value.year, 0, 1)
    const untilDate: Date = new Date(Number(this.requestForm.value.year) + 1, 0, 1)

    //Retrieve commits from ConfigService and assign them to response object
    this.configService
      .getData(this.urlToLocation(this.requestForm.value.repoUrl), sinceDate, untilDate)
      .subscribe((commits: Commit[]) => {
        this.response = {
          year: this.requestForm.value.year,
          commits: new Promise((resolve) => resolve(commits))
        }
    })
  }

}
