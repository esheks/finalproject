import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { ToastController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  
  //for login
  username: string="" ;
  password: string="";
  // username ;
  // password ;

  error = '';

  
  
  constructor(private router:Router,
    private authentication:TaskService, public toastController: ToastController, private navCtrl:NavController  ) {
   
    }
    
    


  ngOnInit() {
    this.authentication.logout();
   }
   
   signUp(){
    this.navCtrl.navigateForward('register');
  }
  

  onSubmit()
  {
    var self = this;//declare toast
    self.presentToast();//declare toast
    
    var username = this.username;
    var password = this.password;
    this.authentication.login(username, password).subscribe(data => {
      console.log(data);
      localStorage.setItem('currentUser', JSON.stringify(data));
      this.router.navigate(['/task']);
    }, err => {
      this.error = err.error;
    })





    
  }//on submit
 
  //Toast
  async presentToast() {
  if(this.username==""){
    const toast = await this.toastController.create({
      message: 'username cannot be empty.',
      duration: 5000
    });
    toast.present();
  
  
  }else if(this.password==""){
    const toast = await this.toastController.create({
      message: 'password cannot be empty.',
      duration: 5000
    });
    toast.present();
  }

  
}

  
    



 }//export
