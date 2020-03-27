import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPrincipalsComponent } from './investment-principals.component';

describe('InvestmentPrincipalsComponent', () => {
  let component: InvestmentPrincipalsComponent;
  let fixture: ComponentFixture<InvestmentPrincipalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentPrincipalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentPrincipalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
