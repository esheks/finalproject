import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-filtertask',
  templateUrl: './filtertask.page.html',
  styleUrls: ['./filtertask.page.scss'],
})
export class FiltertaskPage implements OnInit {
  task = [];
  constructor(private navCtrl:NavController, private service: TaskService) { }

  gotoAddTask(){
    this.navCtrl.navigateForward('task');
  }

  ngOnInit() {

    var self = this;
    //getting data here using suscribe after announcing using the Observable 
    this.service.getData().subscribe(function(data){
      console.log(data);
      self.task = data;
    });

    
  }

}
