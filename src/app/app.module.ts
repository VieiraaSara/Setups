import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewSetupComponent } from './components/pages/new-setup/new-setup.component';
import { SetupFormComponent } from './components/setup-form/setup-form.component';
import { MessagesComponent } from './components/pages/messages/messages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SetupComponent } from './components/pages/setup/setup.component';
import { EditSetupComponent } from './components/pages/edit-setup/edit-setup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    NewSetupComponent,
    SetupFormComponent,
    MessagesComponent,
    SetupComponent,
    EditSetupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
