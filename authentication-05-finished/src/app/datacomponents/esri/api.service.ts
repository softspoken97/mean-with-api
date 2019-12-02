import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class ApiService {
  API_KEY = '6bf2e924bcb14df1a3c5458d47e7e9cd';

  public getEsri() {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get('');
  }
  constructor(private httpClient: HttpClient) {}

}


