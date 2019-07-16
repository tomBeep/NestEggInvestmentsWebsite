import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingBannerComponent } from './scrolling-banner.component';

describe('ScrollingBannerComponent', () => {
  let component: ScrollingBannerComponent;
  let fixture: ComponentFixture<ScrollingBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollingBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
