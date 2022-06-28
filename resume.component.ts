import { Component, OnInit } from '@angular/core';
import { ResumeFormData } from '../model/ResumeFormData';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  formData: ResumeFormData;
  constructor() { 
    let data = (localStorage.getItem("formData") ? localStorage.getItem("formData") : "{}") as string;
    this.formData = JSON.parse(data);
  }

  ngOnInit(): void {
  }

}
