import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLiveFeedsComponent } from './user-live-feeds.component';

describe('UserLiveFeedsComponent', () => {
  let component: UserLiveFeedsComponent;
  let fixture: ComponentFixture<UserLiveFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLiveFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLiveFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
