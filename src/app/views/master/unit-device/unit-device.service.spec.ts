import { TestBed, inject } from '@angular/core/testing';

import { UnitDeviceService } from './unit-device.service';

describe('UnitDeviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitDeviceService]
    });
  });

  it('should be created', inject([UnitDeviceService], (service: UnitDeviceService) => {
    expect(service).toBeTruthy();
  }));
});
