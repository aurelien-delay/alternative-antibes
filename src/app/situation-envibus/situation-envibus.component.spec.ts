import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationEnvibusComponent } from './situation-envibus.component';

describe('SituationEnvibusComponent', () => {
  let component: SituationEnvibusComponent;
  let fixture: ComponentFixture<SituationEnvibusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituationEnvibusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationEnvibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
