import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from '../entities/status';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicescoronaService {
  constructor(private http: HttpClient) { }

  public QueryListStatus(): Observable<Status[]> {
    return this.http.get<Status[]>('https://covid19-api.org/api/status');
  }
}
