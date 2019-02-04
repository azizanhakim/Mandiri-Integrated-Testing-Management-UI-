import { TestBed, inject } from '@angular/core/testing';

import { StatusDeviceService } from './status-device.service';

describe('StatusDeviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusDeviceService]
    });
  });

  it('should be created', inject([StatusDeviceService], (service: StatusDeviceService) => {
    expect(service).toBeTruthy();
  }));
});
