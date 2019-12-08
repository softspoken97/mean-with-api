import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IAlgorithm } from './algorithm.model';

@Injectable({
  providedIn: 'root'
})

export class AlgorithmService {
  API_KEY = 'YOUR_API_KEY';

  private _url = 'http://localhost:3000/api/v1/algorithms';

  constructor(private httpClient: HttpClient) { }

  getAlgorithms(): Observable<IAlgorithm[]> {
    const url = this._url + '/getall';
    return this.httpClient.get<IAlgorithm[]>(url);
  }
}
