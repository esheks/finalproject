import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  

  formdata = {};

  constructor(private navCtrl:NavController, private service:TaskService, private alertController:AlertController ) { }

  ngOnInit() {
  }


  addTask(){
    var self = this;
  this.service.addItem(this.formdata).subscribe( function(result){
    self.showSuccessAlert();

  }, function (err) {
    console.log(err);
  });
  

  
}

async showSuccessAlert() {
  var self = this
  const alert = await this.alertController.create({
    header: 'Alert',

    message: 'The record was inserted successfully.',
    buttons: [{
      text:"ok",
      handler: function(){
        self.navCtrl.navigateForward("filtertask");
      }
    
    }]
  });

  await alert.present();
}


}
