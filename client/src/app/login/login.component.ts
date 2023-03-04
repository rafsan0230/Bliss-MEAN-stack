import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginError = false;
  errorMessage = '';
  validDatas = false;

  constructor(
    public fb: FormBuilder,
    private authService: AuthenticateService,
    private http: HttpClient,
    private router: Router
  ) {}

  readonly baseURL = 'http://localhost:3001/login';

  therapistForm = this.fb.group({
    _id: [null],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  postLogin(): Observable<any> {
    return this.http.post<any>(this.baseURL, this.therapistForm.value);
  }

  onSubmit() {
    // if(this.therapistForm.valid) {
    //   this.postLogin().subscribe((res) =>
    //     localStorage.setItem('currentUserData', JSON.stringify(res))
    //   );
    // }

    const { email, password } = this.therapistForm.value;
    if (email && password) {
      this.authService.loginTherapist({ email, password }).subscribe({
        next: (res) => {
          console.log(res);
          this.postLogin().subscribe((res) => {
            localStorage.setItem(
              'accessToken',
              JSON.stringify(res.accessToken)
            );
            localStorage.setItem('currentUser', JSON.stringify(res.therapist));
            this.router.navigate(['dashboard']);
          });
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.loginError = true;
        },
      });
    }
  }
}
