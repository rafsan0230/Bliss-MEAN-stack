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
  readonly traumaURL = 'http://localhost:3001/patientTrauma';

  retrievedObject = localStorage.getItem('currentUser')!;
  therapist = JSON.parse(this.retrievedObject);

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    if (this.therapist.category === 'couple') {
        this.http.get(this.coupleURL + '/' + id).subscribe((response) => {
          this.patientData = response;
        });
      }
    if (this.therapist.category === 'child') {
        this.http.get(this.childURL + '/' + id).subscribe((response) => {
          this.patientData = response;
          console.log(this.patientData);
        });
      }
    if (this.therapist.category === 'trauma') {
        this.http.get(this.traumaURL + '/' + id).subscribe((response) => {
          this.patientData = response;
        });
      }
  }

  getPatient() {
    if (this.therapist.category === 'couple') {
      return this.http.get(this.coupleURL);
    }
    if (this.therapist.category === 'child') {
      return this.http.get(this.childURL);
    }
    if (this.therapist.category === 'trauma') {
      return this.http.get(this.traumaURL);
    }
    return undefined;
  }

  deletePatient(_id: string) {
    if (this.therapist.category === 'couple') {
      return this.http.delete(this.coupleURL + '/' + _id);
    }
    if (this.therapist.category === 'child') {
      return this.http.delete(this.childURL + '/' + _id);
    }
    if (this.therapist.category === 'trauma') {
      return this.http.delete(this.traumaURL + '/' + _id);
    }
    return undefined;
  }

  onDelete(_id: string) {
    // if (confirm('Are you sure to delete this record?')) {
    const deleting = this.deletePatient(_id);
    if (deleting) {
      deleting.subscribe((res) => {
        console.log(res);
      });
    }
    // }
  }

  readonly acceptCoupleURL = 'http://localhost:3001/acceptedCouple';
  readonly acceptChildURL = 'http://localhost:3001/acceptedChild';
  readonly acceptTraumaURL = 'http://localhost:3001/acceptedTrauma';

  onAccept(_id: string, val:string) {
    this.prescription = val;
    if (this.therapist.category === 'couple') {
      this.http.get(this.coupleURL + '/' + _id).subscribe((response) => {
        this.tempPatientDatas = response;
        this.http
          .post(this.acceptCoupleURL, {...this.tempPatientDatas, pres : this.prescription})
          .subscribe((response) => {
            console.log(response);
            this.onDelete(_id);
            this.router.navigate(['dashboard']);
          });
      });
    }
    if (this.therapist.category === 'child') {
      this.http.get(this.childURL + '/' + _id).subscribe((response) => {
        this.tempPatientDatas = response;
        this.http
          .post(this.acceptChildURL, {...this.tempPatientDatas, pres : this.prescription})
          .subscribe((response) => {
            console.log(response);
            this.onDelete(_id);
            this.router.navigate(['dashboard']);
          });
      });
    }
    if (this.therapist.category === 'trauma') {
      this.http.get(this.traumaURL + '/' + _id).subscribe((response) => {
        this.tempPatientDatas = response;
        this.http
          .post(this.acceptTraumaURL, {...this.tempPatientDatas, pres : this.prescription} )
          .subscribe((response) => {
            console.log(response);
            this.onDelete(_id);
            this.router.navigate(['dashboard']);
          });
      });
    }
    return undefined;
  }
}
