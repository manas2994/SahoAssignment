import { TestBed } from '@angular/core/testing';

import { MyloadGuardGuard } from './myload-guard.guard';

describe('MyloadGuardGuard', () => {
  let guard: MyloadGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyloadGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
