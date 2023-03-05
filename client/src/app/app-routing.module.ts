import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ChatUIComponent } from './chat-ui/chat-ui.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AcceptedPatientComponent } from './accepted-patient/accepted-patient.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'loginPage', component: LoginComponent},
  { path: 'chat', component: ChatUIComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'thankyou', component: ThankyouComponent},
  { path: 'accepted', component: AcceptedPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }