import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSearchComponent } from './hr-search.component';

describe('HrSearchComponent', () => {
  let component: HrSearchComponent;
  let fixture: ComponentFixture<HrSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
