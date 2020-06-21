import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrInboxComponent } from './hr-inbox.component';

describe('HrInboxComponent', () => {
  let component: HrInboxComponent;
  let fixture: ComponentFixture<HrInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
