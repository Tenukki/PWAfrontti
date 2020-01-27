import { TestBed } from '@angular/core/testing';

import { CardStorageService } from './card-storage.service';

describe('CardStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardStorageService = TestBed.get(CardStorageService);
    expect(service).toBeTruthy();
  });
});
