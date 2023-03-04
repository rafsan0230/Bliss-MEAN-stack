import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accepted-patient',
  templateUrl: './accepted-patient.component.html',
  styleUrls: ['./accepted-patient.component.css']
})
export class AcceptedPatientComponent {
  patientDatas!:any;
  status = false;
  addToggle(){
    this.status = !this.status;       
  }
  constructor(
    private http: HttpClient,
    private router: Router
  ){}
}
