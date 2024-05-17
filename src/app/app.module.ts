import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
