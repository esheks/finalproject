import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    // {
    //   title: 'Login',
    //   url: '/login',
    //   icon: 'login'
    // },
    
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // },
    {
      title: 'Task',
      url: '/task',
      icon: 'book'
    },
    {
      title: 'Filter Task',
      url: '/filtertask',
      icon: 'funnel'
    },
    {
      title: 'Progress',
      url: '/progress',
      icon: 'trending-up'
    },
    {
      title: 'Summary',
      url: '/summary',
      icon: 'stats'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
