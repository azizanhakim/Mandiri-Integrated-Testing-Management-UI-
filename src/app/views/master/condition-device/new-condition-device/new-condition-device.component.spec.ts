import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConditionDeviceComponent } from './new-condition-device.component';

describe('NewConditionDeviceComponent', () => {
  let component: NewConditionDeviceComponent;
  let fixture: ComponentFixture<NewConditionDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewConditionDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConditionDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
