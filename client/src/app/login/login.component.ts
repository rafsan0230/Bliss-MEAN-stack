import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 constructor(public fb: FormBuilder){}

 therapistForm = this.fb.group({
  _id: [null],
  email: [''],
  password: ['']
})
onSubmit(){
  console.log(this.therapistForm.value);
}

}
