import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeviceColorComponent } from './update-device-color.component';

describe('UpdateDeviceColorComponent', () => {
  let component: UpdateDeviceColorComponent;
  let fixture: ComponentFixture<UpdateDeviceColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeviceColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeviceColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
