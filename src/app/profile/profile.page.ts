import { Component, OnInit } from '@angular/core';
import {Route} from '@angular/router';
import { UserService } from '../api/user.service';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  uid: string = null;
  password: string = null;

  constructor(
    private locationStratergy:LocationStrategy,
    private userService: UserService
    ) {
    this.preventGoBack();
   }

  ngOnInit() {
    this.userService.readUserData().then((userdata) => {
      if(userdata){
        this.uid = userdata.id;
        this.password = userdata.password;
      }
    })
  }

  preventGoBack(){
    history.pushState(null,null, location.href);
    this.locationStratergy.onPopState(()=> {
      history.pushState(null,null, location.href);
    });
  }

}
