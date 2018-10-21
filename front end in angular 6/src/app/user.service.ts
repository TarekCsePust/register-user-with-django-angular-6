import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {catchError} from 'rxjs/operators'
import {throwError} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _url = "http://localhost:8000/api/users/"

  constructor(private _http:HttpClient) {
    
  }

  registerUser(userData){
    return this._http.post<any>(this._url,userData)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse)
  {
    return throwError(error)
  }

}
