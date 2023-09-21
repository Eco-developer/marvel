import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComicsComponent } from './comics/comics.component';
import { HomeComponent } from './home/home.component';
import { ComicsDetailsComponent } from './comics-details/comics-details.component';
import { CharactersComponent } from './characters/characters.component';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';
import { CreatorsComponent } from './creators/creators.component';
import { CreatorsDetailsComponent } from './creators-details/creators-details.component';
import { SeriesComponent } from './series/series.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    HomeComponent,
    ComicsDetailsComponent,
    CharactersComponent,
    CharactersDetailsComponent,
    CreatorsComponent,
    CreatorsDetailsComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
