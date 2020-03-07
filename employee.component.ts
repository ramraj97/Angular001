import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.html',
  
})
export class EmployeeComponent implements OnInit {
  employee: Employee={
    FirstName : null ,
    LastName : null ,
    Email : null ,
    Contact : null ,
    Adress : null ,
    UserName : null,
    Password : null,
    Gender : null ,
    Qualification : null,
    Experience : null,
    Language : null,

  }
  QualificationArray: string[];
  ExperienceArray: string[];
  LanguageArray: string[];
   
  
   
  
 
  constructor( ) { }
 
   
  ngOnInit(): void {
    
     
    this.QualificationArray =["BE","BTECH","DIPLOMA","MTECH"];
    this.ExperienceArray=["0-1 YEAR","2-5 YEAR","5-8 YEAR","> 8YEAR"];
    this.LanguageArray=["C","C++","JAVA","PYTHON","PHP"]
  }

   print (): void {
   console.log(this.employee);
       }

}
