import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.onPageLoad()
  }

  onPageLoad(){
    setTimeout(()=> {
      this.navigateToHome()
    }, 3000)
  }

  //Navigate to homepage on timeout
  navigateToHome(){
    this.router.navigate(['home'])
  }
}
