import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHomeComponent } from './home/main-home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http'; 
import { HeaderComponent } from './widegts/header/header.component';
import { HomeHeroBannerComponent } from './widegts/home-hero-banner/home-hero-banner.component';
import { SponsorsImageSectionComponent } from './widegts/sponsors-image-section/sponsors-image-section.component';
import { WhoOnYourTeamComponent } from './widegts/who-on-your-team/who-on-your-team.component';
import { ThisIsBetterWayComponent } from './widegts/this-is-better-way/this-is-better-way.component';
import { LetsPartnerTogatherComponent } from './widegts/lets-partner-togather/lets-partner-togather.component';
import { WhyDoctorDavidComponent } from './widegts/why-doctor-david/why-doctor-david.component';
import { FooterComponent } from './widegts/footer/footer.component';
import { InviteDrschreinerToSpeakComponent } from './widegts/invite-drschreiner-to-speak/invite-drschreiner-to-speak.component';
import { SpeakingToComponent } from './home/speaking-to/speaking-to.component';
import { ForMeetingProfessinalsComponent } from './widegts/for-meeting-professinals/for-meeting-professinals.component';
import { AcclaimedKeynoteComponent } from './widegts/acclaimed-keynote/acclaimed-keynote.component';
import { VideosSectionComponent } from './widegts/videos-section/videos-section.component';
import { DrSchreinerTextBannerComponent } from './widegts/dr-schreiner-text-banner/dr-schreiner-text-banner.component';
import { BooksInTheNewsComponent } from './widegts/books-in-the-news/books-in-the-news.component';
import { BookComponent } from './home/book/book.component';
import { BooksStarsRatingComponent } from './widegts/books-stars-rating/books-stars-rating.component';
import { BooksAvailableForOrderTodayComponent } from './widegts/books-available-for-order-today/books-available-for-order-today.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHomeComponent,
    DashboardComponent,  
    HeaderComponent,
    HomeHeroBannerComponent,
    SponsorsImageSectionComponent,
    WhoOnYourTeamComponent,
    ThisIsBetterWayComponent,
    LetsPartnerTogatherComponent,
    WhyDoctorDavidComponent,
    FooterComponent,
    InviteDrschreinerToSpeakComponent,
    SpeakingToComponent,
    ForMeetingProfessinalsComponent,
    AcclaimedKeynoteComponent,
    VideosSectionComponent,
    DrSchreinerTextBannerComponent,
    BookComponent,
    BooksInTheNewsComponent,
    BooksStarsRatingComponent,
    BooksAvailableForOrderTodayComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
