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

  readonly acceptCoupleURL = 'http://localhost:3001/acceptedCouple';
  readonly acceptChildURL = 'http://localhost:3001/acceptedChild';
  readonly acceptTraumaURL = 'http://localhost:3001/acceptedTrauma';

  retrievedObject = localStorage.getItem('currentUser')!;
  therapist = JSON.parse(this.retrievedObject);

  getPatient() {
    if (this.therapist.category === 'couple') {
      return this.http.get(this.acceptCoupleURL);
    }
    if (this.therapist.category === 'child') {
      return this.http.get(this.acceptChildURL);
    }
    if (this.therapist.category === 'trauma') {
      return this.http.get(this.acceptTraumaURL);
    }
    return undefined;
  }

  ngOnInit() {
    const getting = this.getPatient();
    if (getting) {
      getting.subscribe((response) => {
        console.log(response);
        this.patientDatas = response;
      });
    }
  }
}
