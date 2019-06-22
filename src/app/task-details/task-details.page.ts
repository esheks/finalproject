import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {
  task;

  constructor(private route:ActivatedRoute, private service: TaskService) { }
  
  ProgressLevels = {not_started: "Not Started", started:"Started", complete: "Complete"};//to remove the _ from database
  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    
    var self = this;
    //getting data here using suscribe after announcing using the Observable 
    this.service.getTask(id).subscribe(function(data){
     console.log(data);
      self.task = data;
    });
  }

}
