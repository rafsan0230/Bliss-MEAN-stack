import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
export {}; declare global { interface Window { Calendly: any; } }

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
  @HostListener('window:message', ['$event'])
  
  onEvent(ev: any) {
    if (ev.data.event === 'calendly.event_scheduled') {
      console.log('Scheduled done');
      console.log(ev.data.payload);
      window.Calendly.closePopupWidget();
      this.step++;
      this.addMessage(this.questions[this.step], false);
    }
  }
  constructor (private fb: FormBuilder, private http: HttpClient, private router : Router) {}

  private scrollContainer: any;

  readonly coupleURL = 'http://localhost:3001/patientCouple'
  readonly childURL = 'http://localhost:3001/patientChild'
  readonly traumaURL = 'http://localhost:3001/patientTrauma'

  step: number = 0;
  messages: Message[] = [];
  questions: string[] = [
    'What type of therapy do you think is best for you?', //11
    'How do you identify yourself?', //1
    'How old are you?', //2
    'What is your current relationship status?', //3
    'Have you had any traumatic experience?', //13
    'How would you rate your current mental health state?', //4
    'How would you rate your current physical state?', //5
    'Do you have any specific preferences for your therapist?', //12
    'Have you had any therapy sessions before?', //10
    'How would you rate your current financial state?', //6
    'How are your current eating habits?', //7
    'What is your preferred language?', //9
    'What is your current sleeping condition?', //8
    'What is your email address?', //14
    'Schedule appointment with the same email above:', //15
    'Thanks for helping us to gather necessary information about you. Click submit to submit form.' //16
  ];

  genderOptions = ['Male', 'Female', 'Other'];
  typeOfTherapyOptions = ['Individual', "Couple", "For my child"];
  ageOptions = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50+'];
  relationStatusoption = ['Single', 'In a relationship', 'Married', 'Divorced', 'Widowed', 'Other'];
  yesnoOptions = ['Yes', 'No']
  preferredTherapist = ['I prefer male therapist', 'I prefer female therpaist', 'I prefer an older therapist', 'I prefer a non-religious therapist']
  goodPooroptions = ['Good', 'Fair', 'Poor']
  preferredLanguage = ['English', 'Bangla']
  sleeping = ['Trouble falling asleep', 'Sleeping too much', 'Well enough sleep cicle']



  form = this.fb.group({
    sleepCondition: new FormControl('', Validators.required),
    language: new FormControl('', Validators.required),
    eatingHabit: new FormControl('', Validators.required),
    financialState: new FormControl('', Validators.required),
    therapistPreference: new FormControl('', Validators.required),
    physicalHealth: new FormControl('', Validators.required),
    typeOfTherapy: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    relationStatus: new FormControl('', Validators.required),
    traumaExperience: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mentalHealthRate: new FormControl(0, Validators.required),
    therapyExpreience: new FormControl('', Validators.required),
    // firstName: new FormControl('', Validators.required),
    // lastName: new FormControl('', Validators.required),
    // dob: new FormControl('', [Validators.required]),
    // satisfaction: new FormControl(0, Validators.required)
  })



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

  postPatientType(){
    if(this.form.controls.typeOfTherapy.value == "Couple") {
      return this.http.post(this.coupleURL, this.form.value)
    }
    if(this.form.controls.typeOfTherapy.value == "For my child") {
      return this.http.post(this.childURL, this.form.value)
    }
    return undefined;
  }
  postPatientTrauma(){
    if(this.form.controls.traumaExperience.value == "Yes") {
      return this.http.post(this.traumaURL, this.form.value)
    }
    return undefined;
  }

  handleSubmit () {
    // if(this.form.valid) {
      const sendingType = this.postPatientType()
      if (sendingType){
        sendingType.subscribe((res) =>
          localStorage.setItem('currentUserData', JSON.stringify(res))
        );
      }
      const sendingTrauma = this.postPatientTrauma()
      if (sendingTrauma){
        sendingTrauma.subscribe((res) =>
          localStorage.setItem('currentUserData', JSON.stringify(res))
        );
      }
      
      this.router.navigate(['/thankyou'])
  }

  scrollToBottom(): void {             
    if(this.scrollContainer)
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  handleCalendly(){
    if(this.form.controls.typeOfTherapy.value == "Couple"){
      if(this.form.controls.traumaExperience.value == "Yes"){
        window.Calendly.showPopupWidget('https://calendly.com/nafizfuad0230/bliss-therapy-session-trauma');
      }
      window.Calendly.showPopupWidget('https://calendly.com/nafizfuad0230/bliss-therapy-session-trauma');
    }
    if(this.form.controls.typeOfTherapy.value == "For my child"){
      if(this.form.controls.traumaExperience.value == "Yes"){
        window.Calendly.showPopupWidget('https://calendly.com/nafizfuad0230/bliss-therapy-session-trauma');
      }
      window.Calendly.showPopupWidget('https://calendly.com/nafizfuad0230/bliss-therapy-session-trauma');
    }

  }
}
