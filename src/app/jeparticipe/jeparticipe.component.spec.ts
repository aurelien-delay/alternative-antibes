import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeparticipeComponent } from './jeparticipe.component';

describe('JeparticipeComponent', () => {
  let component: JeparticipeComponent;
  let fixture: ComponentFixture<JeparticipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeparticipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeparticipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
