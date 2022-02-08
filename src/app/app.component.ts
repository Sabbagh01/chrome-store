import { Component } from '@angular/core';
import { mock_product_list } from './card/mock_product_list';
import { ProductItemModel } from './card/product-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chrome-store';


  products: ProductItemModel[] = [];

  constructor() {
    for (var product of mock_product_list) {
      this.products.push(product);
      console.log(product);
    }
  }
}

