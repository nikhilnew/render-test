import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTrackerComponent } from './leave-tracker.component';

describe('LeaveTrackerComponent', () => {
  let component: LeaveTrackerComponent;
  let fixture: ComponentFixture<LeaveTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
