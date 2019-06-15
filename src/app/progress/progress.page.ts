import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  task = [];

  constructor(private navCtrl:NavController, private service: TaskService) { }

  ngOnInit() {
    var self = this;
    //getting data here using suscribe after announcing using the Observable 
    this.service.getData().subscribe(function(data){
      console.log(data);
      self.task = data;
    });
  }

}
