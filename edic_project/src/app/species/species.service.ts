import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISpecies } from './species.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SpeciesService {

  API_KEY = 'YOUR_API_KEY';

  private _url = 'http://localhost:3000/api/v1/occurrences/getall';

  constructor(private httpClient: HttpClient) { }

  getSpecies(): Observable<ISpecies[]> {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get<ISpecies[]>(this._url);
  }
}


