import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navigratingcomponents/home/home.component';
import { PagenotfoundComponent } from './navigratingcomponents/pagenotfound/pagenotfound.component';
import { AboutComponent } from './navigratingcomponents/about/about.component';
import { ChallengesComponent } from './navigratingcomponents/challenges/challenges.component';
import { FaqsComponent } from './navigratingcomponents/faqs/faqs.component';
import { PreviouseditionsComponent } from './navigratingcomponents/previouseditions/previouseditions.component';
import { NewsComponent } from './navigratingcomponents/news/news.component';
import { BootcampComponent } from './navigratingcomponents/bootcamp/bootcamp.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'Felicitation', component: ChallengesComponent },
  { path: 'bootcamp', component: BootcampComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'previouseditions', component: PreviouseditionsComponent },
  { path: 'new', component: NewsComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
