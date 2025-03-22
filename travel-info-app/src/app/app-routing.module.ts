import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CountriesComponent } from './components/countries/countries.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    component: LoginComponent, 
    title: 'login'
  },
  { 
    path: 'register', 
    component: RegisterComponent,
    title: 'register' 
  },
  {
    path: 'logout',
    component: LoginComponent,
    title: 'Logout'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard'
      },
      {
        path: 'countries',
        component: CountriesComponent,
        title: 'Countries'
      },
      {
        path: 'favorites',
        component: FavouritesComponent,
        title: 'Favorites'
      },
      {
        path: 'calendar',
        component: CalendarComponent,
        title: 'Calendar'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
