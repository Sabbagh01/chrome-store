import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item-model";import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Injectable(
    {
        providedIn: 'root'
    }
)
export class ProductsService {
//private baseUrl:string = "https://chrome-store-8c7ad-default-rtdb.firebaseio.com/";
//private productsEndPoint:string = "products.json";
//private funcategory:string = "fun.json";
 

constructor(private db:AngularFireDatabase){

}

getFun(){
    return this.db.list<ProductItemModel>("fun").valueChanges();
}
getProducts(){
    return this.db.list<ProductItemModel >("products").valueChanges();
}
addProduct(product: ProductItemModel){
    this.db.list<ProductItemModel >("products").push(product);
}
}
