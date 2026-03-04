import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { MainHomeComponent } from './home/main-home.component'; 
import { SpeakingToComponent } from './home/speaking-to/speaking-to.component';
import { BookComponent } from './home/book/book.component';

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
      } ,

      {
        path: 'speaking-to',
        component: SpeakingToComponent,
      } 
      ,

      {
        path: 'book',
        component: BookComponent,
      } 


 

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
export class AppRoutingModule { }
