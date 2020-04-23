import { Component } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage {

  constructor(private locationStrategy:LocationStrategy) {
    this.preventGoBack();
   }

  preventGoBack(){
    history.pushState(null,null, location.href);
    this.locationStrategy.onPopState(()=> {
      history.pushState(null,null, location.href);
    });
  }
}
