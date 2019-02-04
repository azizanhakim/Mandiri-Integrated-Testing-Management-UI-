import { TestBed, inject } from '@angular/core/testing';

import { ConditionDeviceService } from './condition-device.service';

describe('ConditionDeviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConditionDeviceService]
    });
  });

  it('should be created', inject([ConditionDeviceService], (service: ConditionDeviceService) => {
    expect(service).toBeTruthy();
  }));
});
