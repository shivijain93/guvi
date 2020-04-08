import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StarterComponent } from './starter/starter.component';
import { ProfessionalComponent } from './professional/professional.component';
import { BusinessComponent } from './business/business.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarterComponent,
    ProfessionalComponent,
    BusinessComponent,
    EnterpriseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
