import { TestBed } from '@angular/core/testing';

import { CustompreloadingStrategyServicesService } from './custompreloading-strategy-services.service';

describe('CustompreloadingStrategyServicesService', () => {
  let service: CustompreloadingStrategyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustompreloadingStrategyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
