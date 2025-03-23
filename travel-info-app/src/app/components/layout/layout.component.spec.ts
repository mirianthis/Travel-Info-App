import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from '../../services/storage/storage.service';
import { Router } from '@angular/router';
import { EventBusService } from '../../services/event-bus.service.ts/event-bus.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core'; // Import TranslateModule
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// Import Material modules needed for the tests
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

fdescribe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let storageService: jasmine.SpyObj<StorageService>;
  let router: jasmine.SpyObj<Router>;
  let eventBusService: jasmine.SpyObj<EventBusService>;
  let translateService: jasmine.SpyObj<TranslateService>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['logout']);
    const storageServiceSpy = jasmine.createSpyObj('StorageService', ['isLoggedIn', 'getUser', 'clean']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const eventBusServiceSpy = jasmine.createSpyObj('EventBusService', ['on']);
    const translateServiceSpy = jasmine.createSpyObj('TranslateService', ['use']);

    await TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      imports: [
        // Add necessary Material modules here
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        TranslateModule.forRoot() // Import TranslateModule here
      ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: StorageService, useValue: storageServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: EventBusService, useValue: eventBusServiceSpy },
        { provide: TranslateService, useValue: translateServiceSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    storageService = TestBed.inject(StorageService) as jasmine.SpyObj<StorageService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    eventBusService = TestBed.inject(EventBusService) as jasmine.SpyObj<EventBusService>;
    translateService = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
  });

  beforeEach(() => {
    // Mock storageService to return logged in status and user data
    storageService.isLoggedIn.and.returnValue(true);
    storageService.getUser.and.returnValue({ roles: ['ROLE_ADMIN'], username: 'testUser' });
  });

  it('should initialize with correct roles and user data', () => {
    component.ngOnInit();
    expect(component.isLoggedIn).toBeTrue();
    expect(component.showAdminBoard).toBeTrue();
    expect(component.showAgentBoard).toBeFalse();
    expect(component.username).toBe('testUser');
  });

  it('should toggle sidenav correctly', () => {
    component.toggleSidenav();
    expect(component.isSidenavOpened).toBeTrue();
    component.toggleSidenav();
    expect(component.isSidenavOpened).toBeFalse();
  });

  it('should switch language', () => {
    const language = 'en';
    component.switchLanguage(language);
    expect(translateService.use).toHaveBeenCalledWith(language);
  });
  
});
