import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl:NavController) {}

  signUp(){
    this.navCtrl.navigateForward('register');
  }
  signIn(){
    this.navCtrl.navigateForward('login');
  }

}
