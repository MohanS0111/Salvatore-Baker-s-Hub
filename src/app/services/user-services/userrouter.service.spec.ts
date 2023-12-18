import { TestBed } from '@angular/core/testing';

import { UserrouterService } from './userrouter.service';

describe('UserrouterService', () => {
  let service: UserrouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserrouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
