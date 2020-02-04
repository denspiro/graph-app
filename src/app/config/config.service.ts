import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Commit {
  commit: {
    committer: {
      date: string;
    };
  };
}

export interface Response {
  year: number;
  commits: Promise<Commit[]>;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor( private httpClient: HttpClient ) { }

  // Retrieve commit data from GitHub API for a specific repo within a date range
  public getData(repoLocation: string, sinceDate: Date, untilDate: Date): Observable<Object> {
    return this.httpClient.get(`https://api.github.com/repos/${repoLocation}/commits`, {
      params: {
        "since": `${sinceDate.toISOString()}`, // Start of date range
        "until": `${untilDate.toISOString()}`, // End of date range
        "per_page": "500", // Max number of commits to retrieve per page
      },
    })
  }

}

