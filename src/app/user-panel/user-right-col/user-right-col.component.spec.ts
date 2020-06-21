import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRightColComponent } from './user-right-col.component';

describe('UserRightColComponent', () => {
  let component: UserRightColComponent;
  let fixture: ComponentFixture<UserRightColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRightColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRightColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
