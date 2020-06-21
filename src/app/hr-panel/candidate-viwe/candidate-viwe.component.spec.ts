import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateViweComponent } from './candidate-viwe.component';

describe('CandidateViweComponent', () => {
  let component: CandidateViweComponent;
  let fixture: ComponentFixture<CandidateViweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateViweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateViweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
