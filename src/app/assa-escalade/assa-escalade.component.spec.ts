import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssaEscaladeComponent } from './assa-escalade.component';

describe('AssaEscaladeComponent', () => {
  let component: AssaEscaladeComponent;
  let fixture: ComponentFixture<AssaEscaladeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssaEscaladeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssaEscaladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
