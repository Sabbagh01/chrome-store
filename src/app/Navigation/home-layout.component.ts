import { Component } from "@angular/core";
import { mock_product_list } from "../card/mock_product_list";
import { ProductItemModel } from "../card/product-item-model";

@Component({
    selector: 'cs-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls:['home-layout.component.css']
})
export class HomeLayoutComponent {
    products: ProductItemModel[] = [];

    constructor() {
      for (var product of mock_product_list) {
        this.products.push(product);
        console.log(product);
      }
    }
  }
