
export class ProductItemModel {
  
        img : string;
        name : string;
        rating : string;
        star1 : string;
        star2: string;
        star3 : string;
        star4 : string;
        star5 : string;
        constructor(img: string, name : string, rating: string, star1: string, star2: string, star3: string,star4: string,star5: string){
            this.img = img;
            this.name = name;
            this.rating = rating;
            this.star1 = star1;
            this.star2 = star2;
            this.star3 = star3;
            this.star4 = star4;
            this.star5 = star5;
        }
}