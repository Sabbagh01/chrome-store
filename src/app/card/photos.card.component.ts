import { Component, Input } from "@angular/core";

@Component({
    selector: 'cs-photos-card',
    templateUrl: 'photos.card.component.html',
    styleUrls: ['photos.card.component.css']
})
export class PhotosCard{
@Input() img: string;
@Input() name :string;
@Input() rating: string;
@Input() star1: string;
@Input() star2: string;
@Input() star3: string;
@Input() star4: string;
@Input() star5: string;


constructor(){
    this.img = "./assets/card2.jpg";
    this.name = "naame";
     this.rating = "/assests/bootstrap-icons.svg#star-fill";
     this.star1 = "/assests/bootstrap-icons.svg#star";
 this.star2 = "/assests/bootstrap-icons.svg#star";
this.star3= "/assests/bootstrap-icons.svg#star";
this.star4= "/assests/bootstrap-icons.svg#star";
 this.star5= "/assests/bootstrap-icons.svg#star";
    }
}