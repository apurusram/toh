import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
