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
import { BlogComponent } from './home/blog/blog.component';
import { BlogWidgetsMainComponent } from './home/blog-widgets-main/blog-widgets-main.component';
import { WaysToSuperchargeYourEmployeeReviewsComponent } from './blog-widgets/ways-to-supercharge-your-employee-reviews/ways-to-supercharge-your-employee-reviews.component';
import { FromGoodToGreatCeoCfoRelationshipComponent } from './blog-widgets/from-good-to-great-ceo-cfo-relationship/from-good-to-great-ceo-cfo-relationship.component';
import { PrinciplesAndPracticesToSuperchargeComponent } from './blog-widgets/principles-and-practices-to-supercharge/principles-and-practices-to-supercharge.component';
import { FiveWaysToEngageAtAHigherLevelComponent } from './blog-widgets/five-ways-to-engage-at-a-higher-level/five-ways-to-engage-at-a-higher-level.component';
import { RuralHospitalCeoLocalOwnershipVsPrivateEquityComponent } from './blog-widgets/rural-hospital-ceo-local-ownership-vs-private-equity/rural-hospital-ceo-local-ownership-vs-private-equity.component';
import { KsbHospitalLeaderSharesImplementedIdeasComponent } from './blog-widgets/ksb-hospital-leader-shares-implemented-ideas/ksb-hospital-leader-shares-implemented-ideas.component';
import { AssessingImpactPrivateEquityRuralHospitalsComponent } from './blog-widgets/assessing-impact-private-equity-rural-hospitals/assessing-impact-private-equity-rural-hospitals.component';
import { ImpactPrivateEquityFirmsRuralHospitalsComponent } from './blog-widgets/impact-private-equity-firms-rural-hospitals/impact-private-equity-firms-rural-hospitals.component';
import { CurrentModelDoesntWorkIllinoisHospitalCeoComponent } from './blog-widgets/current-model-doesnt-work-illinois-hospital-ceo/current-model-doesnt-work-illinois-hospital-ceo.component';
import { GivingHisBestComponent } from './blog-widgets/giving-his-best/giving-his-best.component';
import { LessonsFromChildrenLeadingWithAuthenticLoveComponent } from './blog-widgets/lessons-from-children-leading-with-authentic-love/lessons-from-children-leading-with-authentic-love.component';
import { TurnoverTroubleComponent } from './blog-widgets/turnover-trouble/turnover-trouble.component';
import { GratuityComponent } from './blog-widgets/gratuity/gratuity.component';
import { LeadingWithLoveComponent } from './blog-widgets/leading-with-love/leading-with-love.component';
import { HealthcareIsARightComponent } from './blog-widgets/healthcare-is-a-right/healthcare-is-a-right.component';
import { NotAllSuperheroesWearCapesComponent } from './blog-widgets/not-all-superheroes-wear-capes/not-all-superheroes-wear-capes.component';
import { RuralHospitalsStruggleUnderPrivateEquityOwnershipComponent } from './blog-widgets/rural-hospitals-struggle-under-private-equity-ownership/rural-hospitals-struggle-under-private-equity-ownership.component';
import { PressRoomComponent } from './home/press-room/press-room.component';
import { ContactComponent } from './home/contact/contact.component';
import { PodCastsComponent } from './home/pod-casts/pod-casts.component';
import { AboutComponent } from './home/about/about.component';
import { StarRatingComponent } from './widegts/star-rating/star-rating.component';

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
    BooksAvailableForOrderTodayComponent,
    BlogComponent,
    BlogWidgetsMainComponent,
    WaysToSuperchargeYourEmployeeReviewsComponent,
    FromGoodToGreatCeoCfoRelationshipComponent,
    PrinciplesAndPracticesToSuperchargeComponent,
    FiveWaysToEngageAtAHigherLevelComponent,
    RuralHospitalCeoLocalOwnershipVsPrivateEquityComponent,
    KsbHospitalLeaderSharesImplementedIdeasComponent,
    RuralHospitalCeoLocalOwnershipVsPrivateEquityComponent,
    AssessingImpactPrivateEquityRuralHospitalsComponent,
    ImpactPrivateEquityFirmsRuralHospitalsComponent,
    CurrentModelDoesntWorkIllinoisHospitalCeoComponent,
    GivingHisBestComponent,
    LessonsFromChildrenLeadingWithAuthenticLoveComponent,
    TurnoverTroubleComponent,
    GratuityComponent,
    LeadingWithLoveComponent,
    HealthcareIsARightComponent,
    NotAllSuperheroesWearCapesComponent,
    RuralHospitalsStruggleUnderPrivateEquityOwnershipComponent,
    BlogComponent,
    PressRoomComponent,
    ContactComponent,
   PodCastsComponent,
   AboutComponent,
   StarRatingComponent

    
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
