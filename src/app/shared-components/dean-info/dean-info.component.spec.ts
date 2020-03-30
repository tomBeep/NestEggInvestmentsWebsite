import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanInfoComponent } from './dean-info.component';

describe('DeanInfoComponent', () => {
  let component: DeanInfoComponent;
  let fixture: ComponentFixture<DeanInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeanInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeanInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
