import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendapageComponent } from './agendapage.component';

describe('AgendapageComponent', () => {
  let component: AgendapageComponent;
  let fixture: ComponentFixture<AgendapageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendapageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
