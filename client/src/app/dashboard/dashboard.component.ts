import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  patientDatas!: any;
  tempPatientDatas!: any;
  status = false;
  addToggle() {
    this.status = !this.status;
  }
  constructor(private http: HttpClient, private router: Router) {}

  readonly coupleURL = 'http://localhost:3001/patientCouple';
  readonly childURL = 'http://localhost:3001/patientChild';
  readonly individualURL = 'http://localhost:3001/patientIndividual';

  readonly patientURL = 'http://localhost:3001/patient';

  retrievedObject = localStorage.getItem('currentUser')!;
  therapist = JSON.parse(this.retrievedObject);

  getPatient() {
    console.log(this.therapist.typeOfTherapy);
    if (this.therapist.typeOfTherapy === 'Couple') {
      return this.http.get(this.coupleURL);
    }
    if (this.therapist.typeOfTherapy === 'For my child') {
      return this.http.get(this.childURL);
    }
    if (this.therapist.typeOfTherapy === 'Individual') {
      return this.http.get(this.individualURL);
    }
    return undefined;
  }

  ngOnInit() {
    const getting = this.getPatient();
    // console.log(getting);
    if (getting) {
      getting.subscribe((response) => {
        console.log(response);
        this.patientDatas = response;
      });
    }
  }
  deletePatient(_id: string) {
    return this.http.delete(this.patientURL + '/' + _id);
  }

  onDelete(_id: string) {
    // if (confirm('Are you sure to delete this record?')) {
    const deleting = this.deletePatient(_id);
    if (deleting) {
      deleting.subscribe((res) => {
        const getting = this.getPatient();
        if (getting) {
          getting.subscribe((response) => {
            console.log(response);
            this.patientDatas = response;
          });
        }
      });
    }
    // }
  }

  // readonly acceptCoupleURL = 'http://localhost:3001/acceptedCouple';
  // readonly acceptChildURL = 'http://localhost:3001/acceptedChild';
  // readonly acceptTraumaURL = 'http://localhost:3001/acceptedTrauma';

  onAccept(_id: string) {
    this.router.navigate([`details/${_id}`]);
    // if (this.therapist.category === 'couple') {
    //   this.http.get(this.coupleURL + '/' + _id).subscribe((response) => {
    //     this.tempPatientDatas = response;
    //     this.http
    //       .post(this.acceptCoupleURL, this.tempPatientDatas)
    //       .subscribe((response) => {
    //         console.log(response);
    //         // this.tempPatientDatas = response;
    //       });
    //     this.onDelete(_id);
    //   });
    // }
    // if (this.therapist.category === 'child') {
    //   this.http.get(this.childURL + '/' + _id).subscribe((response) => {
    //     this.tempPatientDatas = response;
    //     this.http
    //       .post(this.acceptChildURL, this.tempPatientDatas)
    //       .subscribe((response) => {
    //         console.log(response);
    //         // this.tempPatientDatas = response;
    //       });
    //     this.onDelete(_id);
    //   });
    // }
    // if (this.therapist.category === 'trauma') {
    //   this.http.get(this.traumaURL + '/' + _id).subscribe((response) => {
    //     this.tempPatientDatas = response;
    //     this.http
    //       .post(this.acceptTraumaURL, this.tempPatientDatas)
    //       .subscribe((response) => {
    //         console.log(response);
    //         // this.tempPatientDatas = response;
    //       });
    //     this.onDelete(_id);
    //   });
    // }
    // return undefined;
  }
}
