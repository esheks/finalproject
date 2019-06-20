import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  constructor(private service: TaskService, private activatedRoute:ActivatedRoute) { }
  task = []

  ngOnInit() {
    var self = this;
    this.activatedRoute.queryParams.subscribe(params => {
      this.service.getFilter(params).subscribe(function(data){
        console.log(data);
        self.task = data;
      });
    });

  }

}
