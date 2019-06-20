import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-filtertask',
  templateUrl: './filtertask.page.html',
  styleUrls: ['./filtertask.page.scss'],
})
export class FiltertaskPage implements OnInit {
 
  formdata = {};
  constructor(private navCtrl:NavController, private service: TaskService) { }  

  ngOnInit() {
  
  }

  addFilter()
  {
    var item = this.formdata;
    var queryString = Object.keys(item).map(key=>key + "=" + item[key]).join('&');
    this.navCtrl.navigateForward('tasks?' + queryString)
  }


}
