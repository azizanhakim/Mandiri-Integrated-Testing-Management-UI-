import { TestBed, inject } from '@angular/core/testing';

import { DeviceColorService } from './device-color.service';

describe('DeviceColorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceColorService]
    });
  });

  it('should be created', inject([DeviceColorService], (service: DeviceColorService) => {
    expect(service).toBeTruthy();
  }));
});
