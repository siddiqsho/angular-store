import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductInterface } from '../interfaces/IProducts';
import { ProductService } from '../producta.service';

@Component({
  imports: [FormsModule],
  selector: 'app-add-product',
  styleUrl: './add-product.css',
  templateUrl: './add-product.html',
})
export class AddProduct {
  private productsService=inject(ProductService)

  title=''
  price:number|null =null
  description=''
  category=''
  image=''
  rating:ProductInterface['rating']={
    rate:0,
    count:0
  }

  onSubmit(){
    const newProduct:Omit<ProductInterface,'id'>={
     title: this.title,
    price: this.price ?? 0,
    description: this.description,
    category: this.category,
    image: this.image,
    rating: this.rating
    }

    this.productsService.addProducts(newProduct).subscribe({
      next:(creatProduct)=>{
        console.log('Product add',creatProduct)
        this.onClose()
      },
      error:(err)=>{
        console.log('Problem',err)
      } 
    })
  }

  close=output()
  onClose(){
    this.close.emit()
  }
}
