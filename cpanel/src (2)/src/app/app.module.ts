import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ServiceChhetriaComponent } from './service-chhetria/service-chhetria.component';
import { RouteChhetriaComponent } from './route-chhetria/route-chhetria.component';
import { FormChhetriaComponent } from './form-chhetria/form-chhetria.component';
import { ServiceFEService } from './service-fe.service';
import {Routes, RouterModule} from '@angular/router';
import { Quote01Component } from './quote01/quote01.component';
import { Quote02Component } from './quote02/quote02.component';
const approutes: Routes= [
  {path: "", component:Quote01Component},
  {path: 'quote01', component:Quote01Component},
  {path: 'quote02', component:Quote02Component} ]

@NgModule({
  declarations: [
    AppComponent,
    ServiceChhetriaComponent,
    RouteChhetriaComponent,
    FormChhetriaComponent,
    Quote01Component,
    Quote02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MaterialModule, ReactiveFormsModule, FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    ServiceFEService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
