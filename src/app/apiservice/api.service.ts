import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {catchError,map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

 constructor(private http: HttpClient)  { }

postData(url, data): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const body = JSON.stringify(data);
    return this.http.post(url, data, httpOptions).pipe(map(response => response),
          catchError((error: HttpErrorResponse) => throwError(error)));

  }

  // Put api
  putData(url, data): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const body = JSON.stringify(data);
    return this.http.put(url, data, httpOptions).pipe(map(response => response),
    catchError((error: HttpErrorResponse) => throwError(error)));

  }

  getData(url) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    // return this.http.get(url, httpOptions).subscribe(res => res);
    return this.http.get(url, httpOptions).pipe(map(response => response),
    catchError((error: HttpErrorResponse) => throwError(error)));
}
}
