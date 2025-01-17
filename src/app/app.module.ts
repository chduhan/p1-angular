import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { DuhansAboutComponent } from './duhans-about/duhans-about.component';
import { DuhansCountryComponent } from './duhans-country/duhans-country.component';
import { DuhansPicsComponent } from './duhans-pics/duhans-pics.component';
import { HeaderDuhansComponent } from './header-duhans/header-duhans.component';

@NgModule({
  declarations: [
    AppComponent,
    DuhansAboutComponent,
    DuhansCountryComponent,
    DuhansPicsComponent,
    HeaderDuhansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,MaterialModule,ReactiveFormsModule,FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
