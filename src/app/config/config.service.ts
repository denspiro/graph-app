import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor( private httpClient: HttpClient ) { }

  getData(year: number) {
    return this.httpClient.get('https://api.github.com/repos/angular/angular/commits', {
      params: {
        "since": `${year}-01-01T00:00:00Z`,
        "until": `${year + 1}-01-01T00:00:00Z`,
        "per_page": "100",
      }
    })
  }

}
