import { TestBed } from '@angular/core/testing';

import { OambooService } from './oamboo.service';

describe('OambooService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OambooService = TestBed.get(OambooService);
    expect(service).toBeTruthy();
  });
});
