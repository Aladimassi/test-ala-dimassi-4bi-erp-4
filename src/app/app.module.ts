import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { AnnonceModule } from './annonce/annonce.module';
import { SuggestionDetailsComponent } from './core/suggestion-details/suggestion-details.component';
import { LoginComponent } from './login/login.component';
import { AddSuggestionComponent } from './core/add-suggestion/add-suggestion.component';
import { provideHttpClient } from '@angular/common/http';
import { UpdateSuggestionComponent } from './core/update-suggestion/update-suggestion.component';
import { AddJardinComponent } from './core/add-jardin/add-jardin.component';
import { ListJardinComponent } from './core/list-jardin/list-jardin.component';
import { DetailJardinComponent } from './core/detail-jardin/detail-jardin.component';
import { UpdateJardinComponent } from './core/update-jardin/update-jardin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListSuggestionComponent,
    HomeComponent,
    NotFoundComponent,
    SuggestionDetailsComponent,
    LoginComponent,
    AddSuggestionComponent,
    UpdateSuggestionComponent,
    AddJardinComponent,
    ListJardinComponent,
    DetailJardinComponent,
    UpdateJardinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
   // AnnonceModule,
    AppRoutingModule
  ],
  providers: [ provideHttpClient() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
