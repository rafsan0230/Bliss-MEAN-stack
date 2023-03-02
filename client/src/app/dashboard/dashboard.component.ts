import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  patientDatas!:any;
  status = false;
  addToggle(){
    this.status = !this.status;       
  }
  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  readonly baseURL = 'http://localhost:3001/patient'

  getPatient(){
    return this.http.get(this.baseURL);
  }

  ngOnInit() {
    this.getPatient()
      .subscribe(response => {
        console.log(response)
        this.patientDatas = response;
      });
  }

  // getConfigResponse(): Observable<HttpResponse<Congi {
  //   return this.http.get<Config>(
  //     this.baseURL, { observe: 'response' });
  // }

}
