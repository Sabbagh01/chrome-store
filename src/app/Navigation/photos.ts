import { Component } from "@angular/core";
import { photo_list } from "../card/photo_list";
import { ProductItemModel } from "../card/product-item-model";

@Component({
    selector: 'cs-photos',
    templateUrl: 'photos.html',
    styleUrls: ['photos.css']
})
export class Photos {
    products: ProductItemModel[] = [];

    constructor() {
      for (var product of photo_list) {
        this.products.push(product);
        console.log(product);
      }
    }
}