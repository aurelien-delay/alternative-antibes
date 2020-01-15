import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutienMouvementSocialComponent } from './soutien-mouvement-social.component';

describe('SoutienMouvementSocialComponent', () => {
  let component: SoutienMouvementSocialComponent;
  let fixture: ComponentFixture<SoutienMouvementSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoutienMouvementSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoutienMouvementSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
