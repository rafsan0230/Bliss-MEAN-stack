import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Therapist } from '../model/therapist';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  readonly baseURL = 'http://localhost:3001'
  constructor(
    private http: HttpClient) { } 

    loginTherapist(therapist: {
      email: string;
      password: string;
    }): Observable<{ accessToken: string }> {
      console.log(therapist)
      return this.http.post<{ accessToken: string }>(
        `${this.baseURL}/login`,
        therapist
      );
      }
}
