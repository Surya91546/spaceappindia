import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './navigratingcomponents/home/home.component';
import { AboutComponent } from './navigratingcomponents/about/about.component';
import { ChallengesComponent } from './navigratingcomponents/challenges/challenges.component';
import { PreviouseditionsComponent } from './navigratingcomponents/previouseditions/previouseditions.component';
import { NewsComponent } from './navigratingcomponents/news/news.component';
import { FaqsComponent } from './navigratingcomponents/faqs/faqs.component';
import { PagenotfoundComponent } from './navigratingcomponents/pagenotfound/pagenotfound.component';
import { NavbarComponent } from './commoncomponents/navbar/navbar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutusComponent } from './navigratingcomponents/about/aboutus/aboutus.component';
import { PassionateComponent } from './navigratingcomponents/about/passionate/passionate.component';
import { TeamComponent } from './navigratingcomponents/about/team/team.component';
import { ChallengesBannerComponent } from './navigratingcomponents/challenges/challenges-banner/challenges-banner.component';
import { ItemsComponent } from './navigratingcomponents/challenges/items/items.component';
import { ChallengesFeedbackComponent } from './navigratingcomponents/challenges/challenges-feedback/challenges-feedback.component';
import { BootcampComponent } from './navigratingcomponents/bootcamp/bootcamp.component';
import { Banner5Component } from './navigratingcomponents/bootcamp/banner5/banner5.component';
import { AboveContextComponent } from './navigratingcomponents/bootcamp/above-context/above-context.component';
import { Banner7Component } from './navigratingcomponents/faqs/banner7/banner7.component';
import { FaqComponent } from './navigratingcomponents/faqs/faq/faq.component';
import { Banner8Component } from './navigratingcomponents/news/banner8/banner8.component';
import { CardsComponent } from './navigratingcomponents/news/cards/cards.component';
import { RadarComponent } from './navigratingcomponents/news/radar/radar.component';
import { Banner9Component } from './navigratingcomponents/previouseditions/banner9/banner9.component';
import { WinnersComponent } from './navigratingcomponents/previouseditions/winners/winners.component';
import { GalleryComponent } from './navigratingcomponents/previouseditions/gallery/gallery.component';
import { AboutrevoloutionComponent } from './navigratingcomponents/home/aboutrevoloution/aboutrevoloution.component';
import { TeamsrevolutionComponent } from './navigratingcomponents/home/teamsrevolution/teamsrevolution.component';
import { SupportComponent } from './navigratingcomponents/home/support/support.component';
import { ProcessComponent } from './navigratingcomponents/home/process/process.component';
import { Banner10Component } from './navigratingcomponents/home/banner10/banner10.component';
import { GalleryhomeComponent } from './navigratingcomponents/home/galleryhome/galleryhome.component';
import { HighlightsComponent } from './navigratingcomponents/home/highlights/highlights.component';
import { MarsComponent } from './navigratingcomponents/home/mars/mars.component';
import { VideosbootComponent } from './navigratingcomponents/bootcamp/videosboot/videosboot.component';
import { PreloadingComponent } from './navigratingcomponents/preloading/preloading.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { VideoGalleryComponent } from './navigratingcomponents/bootcamp/video-gallery/video-gallery.component';
import { FormsModule } from '@angular/forms';
import { RealworldComponent } from './navigratingcomponents/challenges/realworld/realworld.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ChallengesComponent,
    PreviouseditionsComponent,
    NewsComponent,
    FaqsComponent,
    PagenotfoundComponent,
    NavbarComponent,
    FooterComponent,
    AboutusComponent,
    PassionateComponent,
    TeamComponent,
    ChallengesBannerComponent,
    ItemsComponent,
    ChallengesFeedbackComponent,
    BootcampComponent,
    Banner5Component,
    AboveContextComponent,
    Banner7Component,
    FaqComponent,
    Banner8Component,
    CardsComponent,
    RadarComponent,
    Banner9Component,
    WinnersComponent,
    GalleryComponent,
    AboutrevoloutionComponent,
    TeamsrevolutionComponent,
    SupportComponent,
    ProcessComponent,
    Banner10Component,
    GalleryhomeComponent,
    HighlightsComponent,
    MarsComponent,
    VideosbootComponent,
    PreloadingComponent,
    VideoGalleryComponent,
    RealworldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({ player: playerFactory }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
