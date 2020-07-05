import { Component, OnInit } from '@angular/core';
import { OambooService } from '../services/oamboo.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  indianCountry: any;
  selectedState = 0;
  // states = [];
  // cities = [];
  states : any
  cities : any
  subCategories: any;
  constructor(private oambooService : OambooService ) {
    
  }
  ngOnInit() {
   this.oambooService.getCountries().subscribe((res : any)=>{
    //  console.log(res["data"][100]);
     this.indianCountry = res["data"][100]
   })
   this.oambooService.getStates().subscribe((res : any)=>{
    this.states = res["data"]
    // console.log(this.states);

  })
  this.oambooService.getCities().subscribe((res : any)=>{
    this.cities = res["data"]
    // console.log(this.cities);
  })
this.oambooService.getSubCategories().subscribe((res : any)=>{
console.log("sub categories",res);
this.subCategories = res["data"]
})
  }


   onSelectState(state_id: number){
    //  console.log(state_id)
     this.selectedState = state_id;
     this.selectedState = 0;
     this.cities = this.cities.filter((item)=>{
      //  console.log(item);
       
       return item.state_id === Number(state_id)
     })
   }
 
}