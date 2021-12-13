import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GloboService {

  constructor(private httpClient: HttpClient) { }

  getLeagues(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/globo/leagues');
  }
}
