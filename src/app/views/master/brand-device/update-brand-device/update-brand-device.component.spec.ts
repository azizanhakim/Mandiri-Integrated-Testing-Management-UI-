import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBrandDeviceComponent } from './update-brand-device.component';

describe('UpdateBrandDeviceComponent', () => {
  let component: UpdateBrandDeviceComponent;
  let fixture: ComponentFixture<UpdateBrandDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBrandDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBrandDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
