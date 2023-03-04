import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedPatientComponent } from './accepted-patient.component';

describe('AcceptedPatientComponent', () => {
  let component: AcceptedPatientComponent;
  let fixture: ComponentFixture<AcceptedPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
