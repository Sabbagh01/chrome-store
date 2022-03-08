import { Component, OnInit } from "@angular/core";
import { ProductItemModel } from "../card/product-item-model";
import { ProductsService } from "../card/products.service";

@Component({
  selector: 'cs-home-layout',
  templateUrl: 'home-layout.component.html',
  styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
  products: ProductItemModel[] = [];

  constructor(private productsService: ProductsService) {

  }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: ProductItemModel[]) => {
      console.log("Fetching products");
      for (var product of data) {
        console.log(product);
        this.products.push(product);
      }
    });

  }
}
