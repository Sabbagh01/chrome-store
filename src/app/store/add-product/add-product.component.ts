import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from 'src/app/card/product-item-model';
import { ProductsService } from 'src/app/card/products.service';

@Component({
  selector: 'fm-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public ps : ProductsService) { }

  ngOnInit(): void {
  }
addProduct(product: ProductItemModel){
  console.log(product);
  this.ps.addProduct(product);
}
}
