import { Component, OnInit } from "@angular/core";
import { OambooService } from "../services/oamboo.service";
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  indianCountry: any;
  cities: any;
  popUpCities= [
    "Ahmedabad",
    "Bangalore",
    "Chandigarh",
    "Chennai",
    "Coimbatore",
    "Delhi",
    "Gurgaon",
    "Hyderabad",
    "Jaipur",
    "Kochi",
    "Kolkata",
    "Lucknow",
    "Mumbai",
    "Pune",
    "Trivandrum"
  ];
  constructor(private oambooService: OambooService,
    private router: Router) { }
  ngOnInit() {
    this.oambooService.getCountries().subscribe((res) => {
      // console.log(res["data"][100]);
      this.indianCountry = res["data"][100];
    });
    this.oambooService.getStates().subscribe((res) => {
      // console.log(res);
    });
    this.oambooService.getCities().subscribe((res) => {
      // console.log(res);
      this.cities = res["data"];
      // console.log(this.cities);
    });
  }
  onSelectCity(i){
    var params ={
     popUpCities : this.popUpCities
    }
  this.router.navigate(["/joblist"],{
    queryParams: params[i]
  });  
  $("#Location").modal("hide");
  }
}