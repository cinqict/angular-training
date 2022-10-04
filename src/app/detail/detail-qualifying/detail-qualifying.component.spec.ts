import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailQualifyingComponent } from './detail-qualifying.component';

describe('DetailQualifyingComponent', () => {
  let component: DetailQualifyingComponent;
  let fixture: ComponentFixture<DetailQualifyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailQualifyingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailQualifyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
