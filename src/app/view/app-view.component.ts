import { Component, OnInit } from '@angular/core';
import {ConfigService} from 'src/app/config/config.service';

@Component({
  selector: 'app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.sass']
})
export class AppViewComponent implements OnInit {
  collection: any
  config: any = [
    {
      year: 2018,
    }
  ]

  constructor(private service: ConfigService) {
  }

  ngOnInit() {
    this.fetchData()
  }

  fetchData(year: number = 2018) {
    this.service.getData(year).subscribe(
      (data: any) => {
        this.collection = data
      },
      (error: any) => console.error(error)
    )
  }

}
