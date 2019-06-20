import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  task = [];
  formdata = {};


  constructor(private navCtrl:NavController, private service: TaskService, private alertController:AlertController) { }

  ngOnInit() {
    var self = this;
    //getting data here using suscribe after announcing using the Observable 
    this.service.getData().subscribe(function(data){
      console.log(data);
      self.task = data;
    });
  }
//   updateTask(){
//     var self = this;
   
//   this.service.addData(this.formdata).subscribe( function(result){
//     self.showSuccessAlert();

//   }, function (err) {
//     console.log(err);
//   });
  

  
// }

// async showSuccessAlert() {
//   var self = this
//   const alert = await this.alertController.create({
//     header: 'Alert',

//     message: 'The record was inserted successfully.',
//     buttons: [{
//       text:"ok",
//       handler: function(){
//         self.navCtrl.navigateForward("progress");
//       }
    
//     }]
//   });

//   await alert.present();
// }


}


