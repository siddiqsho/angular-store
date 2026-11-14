import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../producta.service';
import { ProductInterface } from '../interfaces/IProducts';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card implements OnInit {
  private productService = inject(ProductService);

  products: ProductInterface[] = [];
  selectedProduct: ProductInterface | null = null;

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  openModal(product: ProductInterface) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }
}