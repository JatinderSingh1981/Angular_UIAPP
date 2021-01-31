import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ProductResponse, ProductListResponse } from '../_response';
import { ProductMaster } from '../_models';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseUrl = environment.productApiUrl;
  constructor(private http: HttpClient) {
  }

  //Service methods to handle Classes
  getProductList() {
    return this.http.get<ProductListResponse>(`${this.baseUrl}`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  getProduct(id: number) {
    return this.http.get<ProductResponse>(`${this.baseUrl}/getproductbyid` + '/' + id)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  addProduct(product: ProductMaster) {
    return this.http.post<ProductResponse>(`${this.baseUrl}`, product)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  editProduct(product: ProductMaster) {
    return this.http.put<ProductResponse>(`${this.baseUrl}` + '/' + product.productMasterId, product)
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