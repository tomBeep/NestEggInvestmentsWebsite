import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNowBannerComponent } from './book-now-banner.component';

describe('BookNowBannerComponent', () => {
  let component: BookNowBannerComponent;
  let fixture: ComponentFixture<BookNowBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNowBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNowBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
