import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivacyComponent } from './terms/privacy/privacy.component';
import { CookiesComponent } from './terms/cookies/cookies.component';
import { HomeComponent } from './home/home.component';
import { ConditionsComponent } from './terms/conditions/conditions.component';
import { RemoveComponent } from './remove/remove.component';

@NgModule({
  declarations: [
    AppComponent,
    PrivacyComponent,
    CookiesComponent,
    HomeComponent,
    ConditionsComponent,
    RemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
