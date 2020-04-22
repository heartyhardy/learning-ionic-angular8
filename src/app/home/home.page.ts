import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  takeMethereText = "Take me there!"
  constructor() {}
  
  takeMeThere(){
    this.takeMethereText = "Taking you there..."
  }

}
