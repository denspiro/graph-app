import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor( private httpClient: HttpClient ) { }

  getData(location: string, sinceDate: Date, untilDate: Date) {
    return this.httpClient.get(`https://api.github.com/repos/${location}/commits`, {
      params: {
        "since": `${sinceDate.toISOString()}`,
        "until": `${untilDate.toISOString()}`,
        "per_page": "100",
      },
    })
  }

}

