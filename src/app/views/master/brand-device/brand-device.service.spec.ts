import { TestBed, inject } from '@angular/core/testing';

import { BrandDeviceService } from './brand-device.service';

describe('BrandDeviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrandDeviceService]
    });
  });

  it('should be created', inject([BrandDeviceService], (service: BrandDeviceService) => {
    expect(service).toBeTruthy();
  }));
});
