import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeaucontactComponent } from './bandeaucontact.component';

describe('BandeaucontactComponent', () => {
  let component: BandeaucontactComponent;
  let fixture: ComponentFixture<BandeaucontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandeaucontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeaucontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
