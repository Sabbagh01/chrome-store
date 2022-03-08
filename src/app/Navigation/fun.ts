import { Component } from "@angular/core";
import { fun_list } from "../card/fun_list";
import { ProductItemModel } from "../card/product-item-model";
import { ProductsService } from "../card/products.service";

@Component({
    selector: 'cs-fun',
    templateUrl: 'fun.html',
    styleUrls: ['fun.css']
})
export class Fun {
    products: ProductItemModel[] = [];

    constructor(private productsService: ProductsService) {

    }
    ngOnInit(): void {
      this.productsService.getFun().subscribe((data: ProductItemModel[]) => {
        console.log("Fetching products");
        for (var funcategory of data) {
          console.log(funcategory);
          this.products.push(funcategory);
        }
      });
  
    }
  }