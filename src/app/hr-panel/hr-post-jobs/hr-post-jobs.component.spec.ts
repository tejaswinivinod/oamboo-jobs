import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrPostJobsComponent } from './hr-post-jobs.component';

describe('HrPostJobsComponent', () => {
  let component: HrPostJobsComponent;
  let fixture: ComponentFixture<HrPostJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrPostJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrPostJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
