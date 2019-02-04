import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUnitDeviceComponent } from './update-unit-device.component';

describe('UpdateUnitDeviceComponent', () => {
  let component: UpdateUnitDeviceComponent;
  let fixture: ComponentFixture<UpdateUnitDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUnitDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUnitDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
