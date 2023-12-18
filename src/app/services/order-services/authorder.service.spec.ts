import { TestBed } from '@angular/core/testing';

import { AuthorderService } from './authorder.service';

describe('AuthorderService', () => {
  let service: AuthorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
