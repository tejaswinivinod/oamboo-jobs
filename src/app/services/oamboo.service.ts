import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ENV } from '../env.config';

@Injectable({
  providedIn: 'root'
})
export class OambooService {

  constructor(private http : HttpClient) {

   }
   getCountries(){
    return this.http.get(`${ENV.OAMBOO_API}countries`)
  }
  getStates(){
    return this.http.get(`${ENV.OAMBOO_API}states`)
  } 
  getCities(){
    return this.http.get(`${ENV.OAMBOO_API}cities`)
  }
  getMainCategories(){
    return this.http.get(`${ENV.OAMBOO_API}mainCategories`)
  }
  getSubCategories(){
    return this.http.get(`${ENV.OAMBOO_API}subCategories`)
  }
}