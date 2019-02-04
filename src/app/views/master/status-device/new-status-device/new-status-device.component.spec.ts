import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStatusDeviceComponent } from './new-status-device.component';

describe('NewStatusDeviceComponent', () => {
  let component: NewStatusDeviceComponent;
  let fixture: ComponentFixture<NewStatusDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStatusDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStatusDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
