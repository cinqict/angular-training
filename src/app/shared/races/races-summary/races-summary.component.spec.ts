import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesSummaryComponent } from './races-summary.component';

describe('RacesSummaryComponent', () => {
  let component: RacesSummaryComponent;
  let fixture: ComponentFixture<RacesSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RacesSummaryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RacesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
