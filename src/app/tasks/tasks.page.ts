import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  constructor(private service: TaskService, private activatedRoute:ActivatedRoute, private navCtrl:NavController) { }
  task = [];

  ProgressLevels = {not_started: "Not Started", started:"Started", complete: "Complete"};

  ngOnInit() {
    var self = this;
    this.activatedRoute.queryParams.subscribe(params => {
      this.service.getFilter(params).subscribe(function(data){
        console.log(data);
        self.task = data;
      });
    });

  }

  viewDetails(task){
    console.log(task.idtask);
    this.navCtrl.navigateForward("task-details/" + task.idtask);
  }


}
