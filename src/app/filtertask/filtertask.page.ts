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

  gotoCategory(){
    this.navCtrl.navigateForward('category');
  }
  gotoPriority(){
    this.navCtrl.navigateForward('priority');
  }
  gotoDate(){
    this.navCtrl.navigateForward('date');
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
