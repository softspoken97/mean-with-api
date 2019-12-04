import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOccurrence } from './occurrence.model';

@Injectable({
  providedIn: 'root'
})
export class OccurrenceService {
  API_KEY = 'YOUR_API_KEY';

  private _url = 'http://api.gbif.org/v1/species/suggest?datasetKey=d7dddbf4-2cf0-4f39-9b2a-bb099caae36c&q=Puma%20con';

  constructor(private httpClient: HttpClient) { }

  getOccurrence(): Observable<IOccurrence[]> {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get<IOccurrence[]>(this._url);
  }
}
