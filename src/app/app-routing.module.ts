import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './terms/privacy/privacy.component';
import { CookiesComponent } from './terms/cookies/cookies.component';
import { ConditionsComponent } from './terms/conditions/conditions.component';
import { RemoveComponent } from './remove/remove.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'remove', component: RemoveComponent },
  { path: 'terms/privacy', component: PrivacyComponent },
  { path: 'terms/cookies', component: CookiesComponent },
  { path: 'terms/conditions', component: ConditionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
