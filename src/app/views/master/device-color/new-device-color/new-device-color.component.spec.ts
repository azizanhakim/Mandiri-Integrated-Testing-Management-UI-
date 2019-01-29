import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeviceColorComponent } from './new-device-color.component';

describe('NewDeviceColorComponent', () => {
  let component: NewDeviceColorComponent;
  let fixture: ComponentFixture<NewDeviceColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDeviceColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDeviceColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
