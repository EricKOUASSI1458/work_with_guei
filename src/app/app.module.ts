import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgModule } from '@angular/core';

import { NgxLoadingModule } from 'ngx-loading';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MessagesComponent } from './messages/messages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TestsComponent } from './tests/tests.component';

import { FormConnectComponent } from './form-connect/form-connect.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { HealthsComponent } from './healths/healths.component';
import { HealthDetailComponent } from './health-detail/health-detail.component';
import { EducationsComponent } from './educations/educations.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';
import { SecuresComponent } from './secures/secures.component';
import { SecureDetailComponent } from './secure-detail/secure-detail.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TestsComponent,
    FormConnectComponent,
    FormRegisterComponent,
    HealthsComponent,
    HealthDetailComponent,
    EducationsComponent,
    EducationDetailComponent,
    SecuresComponent,
    SecureDetailComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  	FormsModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
