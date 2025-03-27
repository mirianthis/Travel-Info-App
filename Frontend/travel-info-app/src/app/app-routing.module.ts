import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CountriesComponent } from './components/countries/countries.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CountryDetailComponent } from './components/countries/country-detail/country-detail.component';
import { AdminBoardComponent } from './components/admin-board/admin-board.component';
import { AgentBoardComponent } from './components/agent-board/agent-board.component';
import { TravelerBoardComponent } from './components/traveler-board/traveler-board.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { AdminGuard } from './guards/admin/admin.guard';
import { AgentGuard } from './guards/agent/agent.guard';

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
    path: 'access-denied', 
    component: AccessDeniedComponent,
    title: 'Access Denied' 
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'logout',
        component: LoginComponent,
        title: 'Logout'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard'
      },
      {
        path: 'countries',
        component: CountriesComponent,
        title: 'Countries',
      },
      {
        path: 'country/:name',
        component: CountryDetailComponent,
        title: 'Country Detail'
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
      {
        path: 'admin-board',
        component: AdminBoardComponent,
        title: 'Admin Board',
        canActivate: [AdminGuard]
      },
      {
        path: 'agent-board',
        component: AgentBoardComponent,
        title: 'Agent Board',
        canActivate: [AgentGuard]
      },
      {
        path: 'traveler-board',
        component: TravelerBoardComponent,
        title: 'Traveler Board'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
