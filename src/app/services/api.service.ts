import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, from } from 'rxjs'
import { API } from 'src/app/app-config'


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  api: string = API

  constructor(private http: HttpClient) { }

  login_cs(params: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post(`${this.api}login`,params, httpOptions)
  }

}
