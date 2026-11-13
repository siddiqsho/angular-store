import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ProductService } from '../producta.service';
import { ProductInterface } from '../modal/product-interface';

@Component({
  imports: [AsyncPipe],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {
  private productService = inject(ProductService);

  products$ = this.productService.getProducts();
  selectedProduct: ProductInterface | null = null;

  openModal(product: ProductInterface) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }
}