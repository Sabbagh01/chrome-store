import { Component, Input } from "@angular/core";

@Component({
    selector: 'cs-photos-crousel',
    templateUrl: 'crousel.photos.html',
    styleUrls: ['crousel.photos.css']
})
export class photosCrousel{
 img: string;
name :string;
rating: string;

constructor(){
    this.img = "image";
    this.name = "name";
    this.rating = "";
    }
}


