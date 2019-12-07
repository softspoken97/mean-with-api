import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IScenario } from './scenario.model';


@Injectable({
  providedIn: 'root'
})
export class ScenarioService {
API_KEY = 'YOUR_API_KEY';

  private _url = 'http://localhost:3000/api/v1/scenarios';

  constructor(private httpClient: HttpClient) { }

  getScenarios(): Observable<IScenario[]> {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get<IScenario[]>(this._url);
  }
}
