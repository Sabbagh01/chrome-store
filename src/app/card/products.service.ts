import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item-model";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class ProductsService {
private baseUrl:string = "https://chrome-store-8c7ad-default-rtdb.firebaseio.com/";
private productsEndPoint:string = "products.json";
private funcategory:string = "fun.json";

constructor(private http:HttpClient){

}

getFun(){
    return this.http.get<ProductItemModel []>(this.baseUrl + this.funcategory);
}
getProducts(){
    return this.http.get<ProductItemModel []>(this.baseUrl + this.productsEndPoint);
}
getProduct(index:number){
    return this.http.get<ProductItemModel >(this.baseUrl + this.productsEndPoint + '/' + index + '.json');
}
}
