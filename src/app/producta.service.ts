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
deleteProducts(id:number){
    return this.http.delete(`${environment.apiUrl}/products/${id}`)
}
addProducts(product:Omit<ProductInterface,'id'>){
    return this.http.post<ProductInterface>(`${environment.apiUrl}/products`,product)   
}
}
