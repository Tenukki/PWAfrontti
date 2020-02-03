import { TestBed, async, inject } from '@angular/core/testing';

import { RouterGuardGuard } from './router-guard.guard';

describe('RouterGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterGuardGuard]
    });
  });

  it('should ...', inject([RouterGuardGuard], (guard: RouterGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
