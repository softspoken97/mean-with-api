import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetacrawlService {
  API_KEY = 'YOUR_API_KEY';
  public getMetacrawl() {
    return this.httpClient.get(`http://client.lifemapper.org/api/v2/scenario/`);
  }
  constructor(private httpClient: HttpClient) { }
}
