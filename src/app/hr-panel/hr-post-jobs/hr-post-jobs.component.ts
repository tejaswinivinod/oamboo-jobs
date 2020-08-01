import { Component, OnInit } from '@angular/core';
import { OambooService } from 'src/app/services/oamboo.service';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
  FormControl,
} from "@angular/forms";
import { TypeaheadMatch } from "ngx-bootstrap/typeahead/public_api";

@Component({
  selector: 'app-hr-post-jobs',
  templateUrl: './hr-post-jobs.component.html',
  styleUrls: ['./hr-post-jobs.component.css']
})
export class HrPostJobsComponent implements OnInit {
  

  jobtypelist = ["Full time", "Part time", "Work from Home", "Free lancer"]
  years = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
  months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
  requiredStatus = ["Urgent", "Immediate", "Regular"]
  educations = ["Any Postgraduate", "Post Graduation", "MBA/PGDM", "M.Tech", "M.Ed", "MS/M.ScScience", "M.A", "Medical-MS/MD", "MCA", "M.Com", "CA77", "M.Pharma", "B.Tech/B.E.", "B.Ed", "B.A", "Any Graduate", "B.Sc", "B.Com", "Diploma", "Graduation", "BCA", "B.B.A / B.M.S", "B.Pharma", "Other Graduate", "B.P.Ed"]
  locations = ["Ahmedabad", "Bangalore", "Chandigarh", "Chennai", "Coimbatore", "Delhi", "Gurgaon", "Hyderabad", "Jaipur", "Kochi", "Kolkata", "Lucknow", "Mumbai", "Pune", "Trivandrum"];
  keySkills = ["Critical thinking and problem solving", "Teamwork and collaboration", "Professionalism and strong work ethic", "Oral and written communications skills", " Leadership"]
  subCategories: any;
  postJob: any;
  jobDetailsForm:any;
  selectedOption: any;
  typeaheadNoResults: boolean;
  exp: string;
  minSalary: string;
  maxSalary: string;
  salaryRange: string;
  
  constructor(private oambooService: OambooService,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.oambooService.getSubCategories().subscribe((res: any) => {
      console.log(res)
      this.subCategories = res["data"]

    })
    this.jobDetailsForm = this.formBuilder.group({
    profileTitle:[""],
    jobType:[""],
    jobRole:[""],
    vacancies:[""],
    closingDate:[""],
    minLakhs:[""],
    minThousands:[""],
    maxLakhs:[""],
    maxThousands:[""],
    fromExp:[""],
    toExp:[""],
    reqStatus:[""],
    education:[""],
    prefLocation:[""],
    keySkills:[""],
    description:[""],
    })
  }
   // Selected Departure
   onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
    
  }
  changeTypeaheadNoResults(e) {
    this.typeaheadNoResults = e;
  }
  onSubmit() {
    this.exp = this.jobDetailsForm.value.fromExp + '' + '-' + '' + this.jobDetailsForm.value.toExp + 'years';
    this.minSalary= this.jobDetailsForm.value.minLakhs + '' + '-' + '' + this.jobDetailsForm.value.minThousands;
    this.maxSalary= this.jobDetailsForm.value.maxLakhs + '' + '-' + '' + this.jobDetailsForm.value.maxThousands ;
    this.salaryRange =this.jobDetailsForm.value.minLakhs+'.'+this.jobDetailsForm.value.minThousands+''+'-'+''+this.jobDetailsForm.value.maxLakhs+'.'+this.jobDetailsForm.value.maxThousands+ 'Lakhs';
   const body={
    profile_title:this.jobDetailsForm.value.profileTitle,
    job_type:this.jobDetailsForm.value.jobType,
    job_role:this.jobDetailsForm.value.jobRole,
    no_of_vacancies:this.jobDetailsForm.value.vacancies,
    closing_date:this.jobDetailsForm.value.closingDate,
    min_salary:this.jobDetailsForm.value.minLakhs,
    max_salary:this.jobDetailsForm.value.maxLakhs,
    salary_range:this.salaryRange,
    experience:this.exp,
    req_status:this.jobDetailsForm.value.reqStatus,
    education:this.jobDetailsForm.value.education,
    pref_location:this.jobDetailsForm.value.prefLocation,
    key_skills:this.jobDetailsForm.value.keySkills,
    description:this.jobDetailsForm.value.description,
   }

    this.oambooService.postJobs(body).subscribe(data => {
    })
  }
  
}
