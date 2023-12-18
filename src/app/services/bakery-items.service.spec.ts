import { TestBed } from '@angular/core/testing';

import { BakeryItemsService } from './bakery-items.service';

describe('BakeryItemsService', () => {
  let service: BakeryItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BakeryItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
