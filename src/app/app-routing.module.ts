import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './comics/comics.component';
import { HomeComponent } from './home/home.component';
import { ComicsDetailsComponent } from './comics-details/comics-details.component';
import { CharactersComponent } from './characters/characters.component';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';
import { CreatorsComponent } from './creators/creators.component';
import { CreatorsDetailsComponent } from './creators-details/creators-details.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'comics', component: ComicsComponent },
  { path: 'comics/:id', component: ComicsDetailsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharactersDetailsComponent },
  { path: 'creators', component: CreatorsComponent },
  { path: 'creators/:id', component: CreatorsDetailsComponent },
  { path: 'series', component: SeriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
