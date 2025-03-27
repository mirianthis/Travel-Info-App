import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelerBoardComponent } from './traveler-board.component';

describe('TravelerBoardComponent', () => {
  let component: TravelerBoardComponent;
  let fixture: ComponentFixture<TravelerBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelerBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
