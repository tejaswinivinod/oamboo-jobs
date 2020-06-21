import { Component, OnInit} from '@angular/core';
import { OambooService } from '../services/oamboo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  indianCountry: any;
  constructor(private oambooService : OambooService ) { }
  ngOnInit() {
    this.oambooService.getCountries().subscribe(res=>{
      console.log(res["data"][100]);
      this.indianCountry = res["data"][100]
    })
    this.oambooService.getStates().subscribe(res=>{
     console.log(res);
   })
   this.oambooService.getCities().subscribe(res=>{
     console.log(res);
   })
  }
}
