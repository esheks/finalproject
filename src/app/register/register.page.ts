import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formdata = {};
  // isDisable = false;//remove
  
  
  
  //validation declaration as empty
  firstname: string="" ;
  lastname: string="";
  email: string="";
  username: string="";
  password: string="";
  constructor(private navCtrl:NavController, private service:TaskService, private alertController:AlertController,public toastController: ToastController ) { }

  ngOnInit() {
  }

  //click button to add data
  addRegiter(){
   //var disable = this;
   // var toast = this;//declare toast error validation
    var self = this;//declare success validation
  this.service.register(this.formdata).subscribe( function(result){
    self.showSuccessAlert();//declare success validation
   //toast.presentToast();//declare toast error validation
    //disable.buttondisable();//declare disable buuton

  }, function (err) {
    console.log(err);
  });
  

  
}
// Toast succes validation
async showSuccessAlert() {
  var self = this
  const alert = await this.alertController.create({
    header: 'Alert',

    message: 'The record was inserted successfully.',
    buttons: [{
      text:"ok",
      handler: function(){
        self.navCtrl.navigateForward("login");
      }
    
    }]
  });

  await alert.present();
}

// //Toast error validation
// async presentToast() {
//   if(this.firstname==""){
//     const toast = await this.toastController.create({
//       message: 'firstname cannot be empty.',
//       duration: 5000
//     });
//     toast.present();
  
  
//   }
//   else if(this.lastname==""){
//     const toast = await this.toastController.create({
//       message: 'lastname cannot be empty.',
//       duration: 5000
//     });
//     toast.present();
//   }
//   else if(this.email==""){
//     const toast = await this.toastController.create({
//       message: 'email cannot be empty.',
//       duration: 5000
//     });
//     toast.present();
//   }
//   else if(this.username==""){
//     const toast = await this.toastController.create({
//       message: 'username cannot be empty.',
//       duration: 5000
//     });
//     toast.present();
//   }
//   else if(this.password==""){
//     const toast = await this.toastController.create({
//       message: 'password cannot be empty.',
//       duration: 5000
//     });
//     toast.present();
//   }



  
// }

// buttondisable(){
  
//   if(this.firstname=="" && this.lastname=="" && this.email=="" && this.username=="" && this.password=="" )
//   return this.isDisable=true;
//   else{
//       return this.isDisable=false;
//   }
  
// };



  
    




}
