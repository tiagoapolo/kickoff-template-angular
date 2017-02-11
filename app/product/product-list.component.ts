import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  // Implements relative paths
  moduleId: module.id,
  templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit {

  pageTitle: string = "Product List";
  imageWidth:number = 50;
  imageMargin:number = 2;
  showImage: boolean = false;
  listFilter: string = '';
  products: IProduct[];

  constructor(private _productService: ProductService){
  }

  ngOnInit(): void{
    this.products = this._productService.getProducts();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void{
    this.pageTitle = 'list: ' + message;
  }
}
