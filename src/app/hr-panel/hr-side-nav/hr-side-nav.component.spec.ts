import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSideNavComponent } from './hr-side-nav.component';

describe('HrSideNavComponent', () => {
  let component: HrSideNavComponent;
  let fixture: ComponentFixture<HrSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
