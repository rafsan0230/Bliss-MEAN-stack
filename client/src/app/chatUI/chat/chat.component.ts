import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Message {
  content: string,
  user: boolean,
}


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollMe', {static: false}) scrollFrame: ElementRef | undefined;

  private scrollContainer: any;

  readonly baseURL = 'http://localhost:3001/patient'

  step: number = 0;
  messages: Message[] = [];
  questions: string[] = [
    'What is your first name?',
    'What is your last name?',
    'What is your email address?',
    'What is your date of birth?',
    'What gender are you?',
    'Please rate your level of satisfaction with our services.',
    'Click submit to submit form.'
  ];

  genderOptions = ['Male', 'Female', 'Other'];
  typeOfTherapyOptions = ['Individual', "Couple", "For my child"];
  ageOptions = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50+'];
  relationStatusoption = ['Single', 'In a relationship', 'Married', 'Divorced', 'Widowed', 'Other'];
  


  form = this.fb.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl('', [Validators.required]),
    gender: new FormControl('', Validators.required),
    satisfaction: new FormControl(0, Validators.required)
  })

  constructor (private fb: FormBuilder, private http: HttpClient) {}


  ngAfterViewInit(): void {
    this.scrollContainer = this.scrollFrame!.nativeElement;
    this.addMessage(this.questions[this.step], false);
  }

  ngOnInit(): void {
  }

  addMessage (content: string, user: boolean) {
    this.messages.push({content, user});
    this.scrollToBottom();
  }

  handleNewInfo (info: any) {
    this.addMessage(info.toString(), true);
    this.step++;
    setTimeout(() => {
      this.addMessage(this.questions[this.step], false);
    }, 500);
  }

  postPatient(){
    return this.http.post(this.baseURL, this.form.value)
  }

  handleSubmit () {
    if(this.form.valid) {
        this.postPatient().subscribe((res) =>
          localStorage.setItem('currentUserData', JSON.stringify(res))
        );
      }
  }

  scrollToBottom(): void {             
    if(this.scrollContainer)
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
}
