import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService, UserStorage } from './api/user.service';
import { Router } from '@angular/router';
import { AuthService } from './api/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [UserService]
})
export class AppComponent {

  userdata:UserStorage[] =[];
  newuserdata:UserStorage = <UserStorage>{};


  constructor(
    private platform: Platform,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.router.navigate(['splash']);
       
      setTimeout(() => {
        this.userService.readUserData().then((userdata) => {
          if(userdata){
            this.authService.checkUserToken(userdata).subscribe((res) => {
              if(res){
                this.router.navigate(['profile']);
              }else{
                this.router.navigate(['home']);
              }
            });
          }else{
            this.router.navigate(['home']);
          }
        }) 
      }, 3000);

    });
  }


    
    

}
