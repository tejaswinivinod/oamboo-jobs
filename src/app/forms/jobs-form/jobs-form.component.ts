import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-form',
  templateUrl: './jobs-form.component.html',
  styleUrls: ['./jobs-form.component.css']
})
export class JobsFormComponent implements OnInit {
  jotypeError=true;
  jobroleError=true;
  jobtypelist = ["Full Time","Part Time", "Work From Home", "Internship"]
  constructor() { }

  ngOnInit() {
  }
  jobTypeValid(value){
    if(value==="default"){this.jotypeError=true;}else{this.jotypeError=false;}
  }
  jobroleValid(value){
    if(value==="default"){this.jobroleError=true;}else{this.jobroleError=false;}
  }
}
