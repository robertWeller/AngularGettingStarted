import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ProductService {
    private productUrl = './api/products/products.json';
    constructor (private http: HttpClient) {}
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl)
            .do(data => JSON.stringify(data))
            .catch(this.handleError);
    }
    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
