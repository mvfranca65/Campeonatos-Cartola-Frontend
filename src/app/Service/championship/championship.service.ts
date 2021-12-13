import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipService {

  constructor(private httpClient: HttpClient) { }

  getListChampionship(id: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/championship/linked-league/${id}`);
  }

  postNewChampionship(data: any): Observable<any> {
    return this.httpClient.post<any>(`http://localhost:8080/championship/new`, data);
  }
  
}