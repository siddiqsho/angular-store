import { Component, importProvidersFrom, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './producta.service';
import { ProductInterface } from './modal/product-interface';
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit{
  products:ProductInterface[]=[]
  private productService=inject(ProductService)
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.products=data;
      console.log(this.products)
    })
  }
}
