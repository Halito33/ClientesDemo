import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseUrl = '';

  constructor(private http: HttpClient) {}


  getData(endpoint: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${endpoint}`);
  }


  getDataWithParams(endpoint: string, params: Record<string, any>): Observable<any> {
    let httpParams = new HttpParams();
    for (const key in params) {
      httpParams = httpParams.set(key, params[key]);
    }
    return this.http.get<any>(`${this.baseUrl}/${endpoint}`, { params: httpParams });
  }
}
