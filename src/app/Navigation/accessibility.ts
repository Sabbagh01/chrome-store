import { Component } from "@angular/core";
import { a_list } from "../card/a_list";
import { ProductItemModel } from "../card/product-item-model";

@Component({
    selector: 'cs-accessibility',
    templateUrl: 'accessibility.html',
    styleUrls: ['accessibility.css']
})
export class Accessibility {
    products: ProductItemModel[] = [];

    constructor() {
      for (var product of a_list) {
        this.products.push(product);
        console.log(product);
      }
    }
}