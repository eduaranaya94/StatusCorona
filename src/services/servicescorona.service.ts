import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from '@Entities/status';
import { Countries } from '@Entities/Countries';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicescoronaService {
  private api = environment.apiCorona;

  constructor(private http: HttpClient) { }

  public QueryListStatus(): Observable<Status[]> {
    return this.http.get<Status[]>(this.api.url + this.api.status);
  }

  public QueryCountriesList(): Observable<Countries[]> {
    return this.http.get<Countries[]>(this.api.url + this.api.countries);
  }

}
