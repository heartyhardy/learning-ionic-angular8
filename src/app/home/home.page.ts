import { Component } from '@angular/core';
import { UserService, UserStorage } from '../api/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router:Router, private userService: UserService) {}
  
  saveUserData(username:string, password:string){
    var user:UserStorage = <UserStorage>{};
    user.id = username;
    user.password = password;
    this.userService.addUserData(user).then((data) => {
      console.log(data);
      this.router.navigate(['profile']);
    });
  }

}
