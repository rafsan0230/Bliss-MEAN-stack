import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prescribe',
  templateUrl: './prescribe.component.html',
  styleUrls: ['./prescribe.component.css']
})
export class PrescribeComponent {

  patientData!: any;
  tempPatientDatas!: any;
  prescription = '';

  constructor(private http: HttpClient,private router: Router, private route: ActivatedRoute) {}

  readonly coupleURL = 'http://localhost:3001/patientCouple';
  readonly childURL = 'http://localhost:3001/patientChild';
  readonly IndividualURL = 'http://localhost:3001/patientIndividual';

  readonly patientURL = 'http://localhost:3001/patient';



  retrievedObject = localStorage.getItem('currentUser')!;
  therapist = JSON.parse(this.retrievedObject);

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(this.patientURL + '/' + id).subscribe((response) => {
      this.patientData = response;
    });
  }
  readonly acceptedPatientURL = 'http://localhost:3001/acceptedPatient';

  onAccept(_id: string, val:string) {
    this.prescription = val;
    this.http.get(this.patientURL + '/' + _id).subscribe((response) => {
      this.tempPatientDatas = response;
      this.http
        .post(this.acceptedPatientURL, {...this.tempPatientDatas, pres : this.prescription})
        .subscribe((response) => {
          console.log(response);
          this.router.navigate(['dashboard']);
        });
    });
  return undefined;
  }
}
