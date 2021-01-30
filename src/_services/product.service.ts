import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { environment } from '../environments/environment';


@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseUrl=environment.apiUrl;
    constructor(private http: HttpClient) {
    }

    //Service methods to handle Classes
    getAllProducts() {
        return this.http.get<string>(`${this.baseUrl}/product`)
        .pipe(
          retry(3),
          catchError(this.handleError)
        );
    }
    
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // Return an observable with a user-facing error message.
      return throwError(
        'Something bad happened; please try again later.');
    }
}