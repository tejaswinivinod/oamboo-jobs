import { Component, OnInit } from '@angular/core';
import { OambooService } from '../services/oamboo.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  indianCountries: any;
  
  stateForm: FormGroup;
  constructor(private oambooService : OambooService ) {
    
  }
  ngOnInit() {
    this.stateForm = new FormGroup({
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl('')
    });


   this.oambooService.getCountries().subscribe(res=>{
     console.log(res["data"][100]);
     this.indianCountries = res["data"][100]
   })
   this.oambooService.getStates().subscribe(res=>{
    console.log(res);
  })
  this.oambooService.getCities().subscribe(res=>{
    console.log(res);
  })
  }
}