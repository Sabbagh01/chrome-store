import { Component, Input } from "@angular/core";

@Component({
    selector: 'cs-category-card',
    templateUrl: 'category.card.component.html',
    styleUrls: ['category.card.component.css']
})
export class categoryCard{
 img: string;
name :string;
rating: string;

constructor(){
    this.img = "image";
    this.name = "name";
    this.rating = "";
    }
}


