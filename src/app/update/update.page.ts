import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
   tasks:[];
   
  constructor(private service: TaskService) { }
   updateData(data,data2){
     this.service.update(data.id, data2);
   }
   
  ngOnInit() {
    this.service.getData().subscribe((data)=>{
      this.tasks=data;
    });

  }

}
