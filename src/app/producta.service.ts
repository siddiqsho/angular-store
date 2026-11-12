import { HttpClient } from '@angular/common/http';
import { inject, Injectable} from '@angular/core';
import { ProductInterface } from './modal/product-interface';
@Injectable({providedIn:'root'})
export class ProductService {

private http=inject(HttpClient)

getProducts(){
    return this.http.get<ProductInterface[]>('https://fakestoreapi.com/products')
}
}
