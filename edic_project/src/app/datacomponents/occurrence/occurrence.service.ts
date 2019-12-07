import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOccurrence } from './occurrence.model';

@Injectable({
  providedIn: 'root'
})
export class OccurrenceService {
  API_KEY = 'YOUR_API_KEY';

  private _url = 'http://localhost:3000/api/v1/occurrences/getall';

  constructor(private httpClient: HttpClient) { }

  getOccurrence(): Observable<IOccurrence[]> {
    // tslint:disable-next-line: max-line-length
    //const url = this._url + '/getall';
    return this.httpClient.get<IOccurrence[]>(this._url);
  }
}
