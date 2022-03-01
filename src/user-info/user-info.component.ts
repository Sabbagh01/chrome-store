import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Component({
    selector: 'cs-user-info',
    templateUrl: 'user-info.component.html',
    styleUrls: ['user-info.component.css']
})
export class UserInfoComponent implements OnInit {
myInfo: UserInfo | undefined
constructor(private http: HttpClient ){}
    ngOnInit(): void {
        console.log("sending request to server")
        this.showUserInfo();
        throw new Error("Method not implemented.");
    }

getUserInfo(){
    return this.http.get<UserInfo>('https://chrome-store-8c7ad-default-rtdb.firebaseio.com/myinfo.json');
}
showUserInfo(){
    this.getUserInfo().subscribe((data: UserInfo)  => {
        console.log(data);
        this.myInfo = data;
    }
    )
}
}