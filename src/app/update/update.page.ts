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

  updateData(data, event){
    console.log(data);
    this.service.update(data.idtask, event.target.value).subscribe((x)=>{
      console.log(x);

    });
    // console.log(event.target.value);
   }
   
  ngOnInit() {
    this.service.getData().subscribe((data)=>{
      this.tasks=data;
    });

  }

}


  
