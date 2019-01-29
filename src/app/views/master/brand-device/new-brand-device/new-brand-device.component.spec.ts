import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBrandDeviceComponent } from './new-brand-device.component';

describe('NewBrandDeviceComponent', () => {
  let component: NewBrandDeviceComponent;
  let fixture: ComponentFixture<NewBrandDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBrandDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBrandDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
