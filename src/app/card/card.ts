import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../producta.service';
import { ProductInterface } from '../interfaces/IProducts';
import { AddProduct } from '../add-product/add-product';
@Component({
  imports: [AddProduct],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card implements OnInit {
  private productService = inject(ProductService);
       

  isAddModalOpen=false;
  products: ProductInterface[] = [];
  selectedProduct: ProductInterface | null = null;

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  openModal(product: ProductInterface) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }

  deleteProduct(id: number) {
    this.productService.deleteProducts(id).subscribe({
      next: () => {
        this.products = this.products.filter((p) => p.id !== id);
        console.log(`Продукт с ID ${id} успешно удален`);
      },
      error: (err) => {
        console.error('Ошибка при удалении:', err);
      },
    });
  }

  openAddModal(){
    this.isAddModalOpen=true
  }
  closeAddModal(){
    this.isAddModalOpen=false
  }
}
