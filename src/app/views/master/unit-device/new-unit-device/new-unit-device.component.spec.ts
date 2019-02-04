import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUnitDeviceComponent } from './new-unit-device.component';

describe('NewUnitDeviceComponent', () => {
  let component: NewUnitDeviceComponent;
  let fixture: ComponentFixture<NewUnitDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUnitDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUnitDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
