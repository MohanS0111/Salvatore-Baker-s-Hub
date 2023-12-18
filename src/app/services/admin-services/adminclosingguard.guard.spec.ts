import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { adminclosingguardGuard } from './adminclosingguard.guard';

describe('adminclosingguardGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminclosingguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
