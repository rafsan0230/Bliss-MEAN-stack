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

  readonly coupleURL = 'http://localhost:3001/patientCouple'
  readonly childURL = 'http://localhost:3001/patientChild'
  readonly traumaURL = 'http://localhost:3001/patientTrauma'

  step: number = 0;
  messages: Message[] = [];
  questions: string[] = [
    'What type of therapy are you looking for?',
    'What is your gender identity?',
    'How old are you?',
    'What is your relationship status?',
    'Is there any traumatic experience that hurting you?',
    'What is your email address?',
    'How would you rate your current mental health condistion',
    'Thanks for helping us to gather necessary information about you. Click submit to submit form.'
  ];

  genderOptions = ['Male', 'Female', 'Other'];
  typeOfTherapyOptions = ['Individual', "Couple", "For my child"];
  ageOptions = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50+'];
  relationStatusoption = ['Single', 'In a relationship', 'Married', 'Divorced', 'Widowed', 'Other'];
  yesnoOptions = ['Yes', 'No']



  form = this.fb.group({
    typeOfTherapy: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    relationStatus: new FormControl('', Validators.required),
    traumaExperience: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mentalHealthRate: new FormControl(0, Validators.required),
    // firstName: new FormControl('', Validators.required),
    // lastName: new FormControl('', Validators.required),
    // dob: new FormControl('', [Validators.required]),
    // satisfaction: new FormControl(0, Validators.required)
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
    setTimeout(()=>{
      this.scrollToBottom();
    },200)
  }

  handleNewInfo (info: any) {
    this.addMessage(info.toString(), true);
    this.step++;
    setTimeout(() => {
      this.addMessage(this.questions[this.step], false);
    }, 500);
  }

  postPatient(){
    if(this.form.controls.typeOfTherapy.value == "Couple") {
      return this.http.post(this.coupleURL, this.form.value)
    }
    if(this.form.controls.typeOfTherapy.value == "For my child") {
      return this.http.post(this.childURL, this.form.value)
    }
    if(this.form.controls.traumaExperience.value == "Yes") {
      return this.http.post(this.traumaURL, this.form.value)
    }
    return undefined;
  }

  handleSubmit () {
    // if(this.form.valid) {
      const sending = this.postPatient()
      if (sending){
        sending.subscribe((res) =>
          localStorage.setItem('currentUserData', JSON.stringify(res))
        );
      }
      // }
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
