import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor( private httpClient: HttpClient ) { }

  getData(location: string, sinceDate: Date, untilDate: Date) {
    const headerParams = new HttpHeaders().set('Authorization', 'token 596bb52edd15a4a1c64aa08123b5d1a242455c39')
    return this.httpClient.get(`https://api.github.com/repos/${location}/commits`, {
      headers: headerParams,
      params: {
        "since": `${sinceDate.toISOString()}`,
        "until": `${untilDate.toISOString()}`,
        "per_page": "100",
      },
    })
  }

}

