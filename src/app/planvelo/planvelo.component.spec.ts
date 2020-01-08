import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanveloComponent } from './planvelo.component';

describe('PlanveloComponent', () => {
  let component: PlanveloComponent;
  let fixture: ComponentFixture<PlanveloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanveloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanveloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
