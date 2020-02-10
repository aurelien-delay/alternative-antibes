import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionpubliqueComponent } from './fonctionpublique.component';

describe('FonctionpubliqueComponent', () => {
  let component: FonctionpubliqueComponent;
  let fixture: ComponentFixture<FonctionpubliqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonctionpubliqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonctionpubliqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
