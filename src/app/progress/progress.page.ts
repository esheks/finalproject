import { Component, OnInit } from '@angular/core';//1
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
  ProgressLevels = {not_started: "Not Started", started:"Started", complete: "Complete"};
  
  ngOnInit() {
    var self = this;
    //getting data here using suscribe after announcing using the Observable 
    this.service.getData().subscribe(function(data){
      console.log(data);
      self.tasks = data;
    });
  }

    changeColor(x:{priority_level:string}):string{
      // if (x.priority_level=="high"){return "LightCoral";}
      // else if (x.priority_level=="medium"){return "LightSkyBlue";}
      // else {return "LightYellow";}
      //   }        
      if (x.priority_level=="high"){return "#f04141";}
      else if (x.priority_level=="medium"){return "#ffce00";}
      else {return "#10dc60";}
        }        
      
      updateLevel(){
        this.navCtrl.navigateForward('update?')
     }
}//1