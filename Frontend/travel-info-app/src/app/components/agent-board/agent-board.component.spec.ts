import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentBoardComponent } from './agent-board.component';

describe('AgentBoardComponent', () => {
  let component: AgentBoardComponent;
  let fixture: ComponentFixture<AgentBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgentBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
