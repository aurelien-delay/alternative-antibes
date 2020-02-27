import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantinesscolairesComponent } from './cantinesscolaires.component';

describe('CantinesscolairesComponent', () => {
  let component: CantinesscolairesComponent;
  let fixture: ComponentFixture<CantinesscolairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantinesscolairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantinesscolairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
