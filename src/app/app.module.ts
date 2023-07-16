import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivacyComponent } from './terms/privacy/privacy.component';
import { CookiesComponent } from './terms/cookies/cookies.component';
import { HomeComponent } from './home/home.component';
import { ConditionsComponent } from './terms/conditions/conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    PrivacyComponent,
    CookiesComponent,
    HomeComponent,
    ConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
