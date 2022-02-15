import { Component } from "@angular/core";
import { fun_list } from "../card/fun_list";
import { ProductItemModel } from "../card/product-item-model";

@Component({
    selector: 'cs-fun',
    templateUrl: 'fun.html',
    styleUrls: ['fun.css']
})
export class Fun {
    products: ProductItemModel[] = [];

    constructor() {
      for (var product of fun_list) {
        this.products.push(product);
        console.log(product);
      }
    }
}