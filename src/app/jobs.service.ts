import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  constructor() { }
  getJobsList(){
    return[
      {"id": 1, "name": "Vamshi Das", "age": 20},
      {"id": 2, "name": "Satish", "age": 30},
      {"id": 3, "name": "Raju", "age": 25}
    ]
  }
  getDesignationList(){
    return[
      {"link": "/jobs", "name": "Front Office Executive"},
      {"link": "/jobs", "name": "Banking / Finance"},
      {"link": "/jobs", "name": "HR / Admin"},
    ]
  }
}
