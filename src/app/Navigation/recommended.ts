import { Component } from "@angular/core";
import { mock_product_list } from "../card/mock_product_list";
import { ProductItemModel } from "../card/product-item-model";

@Component({
    selector: 'cs-recommended',
    templateUrl: 'recommended.html',
    styleUrls: ['recommended.css']
})
export class Recommended {
    products: ProductItemModel[] = [];

    constructor() {
      for (var product of mock_product_list) {
        this.products.push(product);
        console.log(product);
      }
    }
}