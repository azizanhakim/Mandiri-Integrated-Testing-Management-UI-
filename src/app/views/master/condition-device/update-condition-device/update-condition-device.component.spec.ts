import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConditionDeviceComponent } from './update-condition-device.component';

describe('UpdateConditionDeviceComponent', () => {
  let component: UpdateConditionDeviceComponent;
  let fixture: ComponentFixture<UpdateConditionDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateConditionDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConditionDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
