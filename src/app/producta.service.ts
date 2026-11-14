import { HttpClient } from '@angular/common/http';
import { inject, Injectable} from '@angular/core';
import { ProductInterface } from './interfaces/IProducts';
import { environment } from '../environments/environment';

@Injectable({providedIn:'root'})
export class ProductService {

private http=inject(HttpClient)

getProducts(){
    return this.http.get<ProductInterface[]>(`${environment.apiUrl}/products`)
}
}
