import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerQueryComponent } from './player-query/player-query.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerDetailsComponent,
    PlayerFormComponent,
    PlayerQueryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule here
    ReactiveFormsModule // Add ReactiveFormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
