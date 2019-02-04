import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatusDeviceComponent } from './list-status-device.component';

describe('ListStatusDeviceComponent', () => {
  let component: ListStatusDeviceComponent;
  let fixture: ComponentFixture<ListStatusDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStatusDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStatusDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
