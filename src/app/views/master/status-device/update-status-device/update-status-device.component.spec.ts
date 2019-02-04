import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStatusDeviceComponent } from './update-status-device.component';

describe('UpdateStatusDeviceComponent', () => {
  let component: UpdateStatusDeviceComponent;
  let fixture: ComponentFixture<UpdateStatusDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStatusDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStatusDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
