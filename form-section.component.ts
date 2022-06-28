import { Component, OnInit } from '@angular/core';
import { ResumeFormData } from '../model/ResumeFormData';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {

  formData: ResumeFormData;
  showResume: boolean = false;

  constructor() {
    this.formData = {
      firstName: "",
      middleName: "",
      lastName: "",
      dob:"",
      email: "",
      address : "",
      university1 : "",
      yearofpassing1: "",
      percentage1: "",
      university2 : "",
      yearofpassing2 : "",
      percentage2 : "",
      university3 : "",
      yearofpassing3 : "",
      percentage3 : "",
      university4 : "",
      yearofpassing4 : "",
      percentage4 : ""

    }
   }

  ngOnInit(): void {
  }

  saveFormData() {
    console.log(this.formData);
    localStorage.setItem("formData", JSON.stringify(this.formData));
    this.showResume = true;
  }
}
