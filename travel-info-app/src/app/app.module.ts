import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors/auth.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CountriesComponent } from './components/countries/countries.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { CountryDetailComponent } from './components/countries/country-detail/country-detail.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import { MatOptionModule } from '@angular/material/core';  
import { MatTableModule } from '@angular/material/table';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AdminBoardComponent } from './components/admin-board/admin-board.component';
import { AgentBoardComponent } from './components/agent-board/agent-board.component';
import { TravelerBoardComponent } from './components/traveler-board/traveler-board.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Function to load translation files
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    DashboardComponent,
    CountriesComponent,
    FavouritesComponent,
    CalendarComponent,
    FilterPipe,
    CountryDetailComponent,
    AdminBoardComponent,
    AgentBoardComponent,
    TravelerBoardComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    CanvasJSAngularChartsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatTableModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [httpInterceptorProviders, provideAnimationsAsync('noop')],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private translate: TranslateService) {

    // Set default language and load translations
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
