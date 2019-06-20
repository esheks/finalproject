import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  task = [];

  constructor(private service: TaskService) { }

  ngOnInit() {
    // var self = this;
    // //getting data here using suscribe after announcing using the Observable 
    // this.service.getData().subscribe(function(data){
    //   console.log(data);
    //   self.task = data;
    // });
    
  }
  
}
