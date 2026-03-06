import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { MainHomeComponent } from './home/main-home.component';
import { SpeakingToComponent } from './home/speaking-to/speaking-to.component';
import { BookComponent } from './home/book/book.component';
import { BlogComponent } from './home/blog/blog.component';
import { BlogWidgetsMainComponent } from './home/blog-widgets-main/blog-widgets-main.component';
import { PodCastsComponent } from './home/pod-casts/pod-casts.component';
import { PressRoomComponent } from './home/press-room/press-room.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { MeetingRequestComponent } from './home/meeting-request/meeting-request.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/dashboard',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: MainHomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'speaking-to',
        component: SpeakingToComponent,
      },
      {
        path: 'book',
        component: BookComponent,
      },
      {
        path: 'pod-casts',
        component: PodCastsComponent,
      },

      {
        path: 'press-room',
        component: PressRoomComponent,
      },

       {
        path: 'about',
        component: AboutComponent,
      },


       {
        path: 'contact',
        component: ContactComponent,
      },

       {
        path: 'meeting-request',
        component: MeetingRequestComponent,
      },






      {
        path: 'blog',
        component: BlogComponent,
      },

      { path: '3-ways-to-supercharge-your-employee-reviews',            component: BlogWidgetsMainComponent },
      { path: 'from-good-to-great-ceo-cfo-relationship',                component: BlogWidgetsMainComponent },
      { path: 'principles-and-practices-to-supercharge',                component: BlogWidgetsMainComponent },
      { path: '5-ways-to-engage-at-a-higher-level',                     component: BlogWidgetsMainComponent },
      { path: 'rural-hospitals-struggle-under-private-equity-ownership', component: BlogWidgetsMainComponent },
      { path: 'ksb-hospital-leader-shares-implemented-ideas',           component: BlogWidgetsMainComponent },
      { path: 'rural-hospital-ceo-local-ownership-vs-private-equity',   component: BlogWidgetsMainComponent },
      { path: 'assessing-impact-private-equity-rural-hospitals',        component: BlogWidgetsMainComponent },
      { path: 'impact-private-equity-firms-rural-hospitals',            component: BlogWidgetsMainComponent },
      { path: 'current-model-doesnt-work-illinois-hospital-ceo',        component: BlogWidgetsMainComponent },
      { path: 'giving-his-best',                                         component: BlogWidgetsMainComponent },
      { path: 'lessons-from-children-leading-with-authentic-love',      component: BlogWidgetsMainComponent },
      { path: 'turnover-trouble',                                        component: BlogWidgetsMainComponent },
      { path: 'gratuity',                                                component: BlogWidgetsMainComponent },
      { path: 'leading-with-love',                                       component: BlogWidgetsMainComponent },
      { path: 'healthcare-is-a-right',                                   component: BlogWidgetsMainComponent },
      { path: 'not-all-superheroes-wear-capes',                         component: BlogWidgetsMainComponent },
    ],
  },

  {
    path: '**',
    redirectTo: '/home/dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}