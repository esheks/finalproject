import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.page.html',
  styleUrls: ['./priority.page.scss'],
})
export class PriorityPage implements OnInit {
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
