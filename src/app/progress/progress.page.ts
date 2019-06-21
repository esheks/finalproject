import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  tasks = [];
  formdata = {};
  
  color_priority;

  constructor(private navCtrl:NavController, private service: TaskService, private alertController:AlertController) { }

  ngOnInit() {
    var self = this;
    //getting data here using suscribe after announcing using the Observable 
    this.service.getData().subscribe(function(data){
      console.log(data);
      self.tasks = data;
    });
  }

    changeColor(x:{priority_level:string}):string{
      if (x.priority_level=="high"){return "LightCoral";}
      else if (x.priority_level=="medium"){return "LightSkyBlue";}
      else {return "LightYellow";}
        }        
      
      updateLevel(){
        this.navCtrl.navigateForward('update?')
     }
    }

