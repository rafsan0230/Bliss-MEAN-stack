import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatUIComponent } from './chat-ui/chat-ui.component';
import { ChatComponent } from './chatUI/chat/chat.component';
import { FormFieldComponent } from './chatUI/form-field/form-field.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AcceptedPatientComponent } from './accepted-patient/accepted-patient.component';
import { PrescribeComponent } from './prescribe/prescribe.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    ChatUIComponent,
    ChatComponent,
    FormFieldComponent,
    DashboardComponent,
    PatientInfoComponent,
    ThankyouComponent,
    AcceptedPatientComponent,
    PrescribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSliderModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
