import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr-post-jobs',
  templateUrl: './hr-post-jobs.component.html',
  styleUrls: ['./hr-post-jobs.component.css']
})
export class HrPostJobsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(createProfile){
    console.log(createProfile);
    
  }
}
