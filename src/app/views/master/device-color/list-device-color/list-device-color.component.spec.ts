import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeviceColorComponent } from './list-device-color.component';

describe('ListDeviceColorComponent', () => {
  let component: ListDeviceColorComponent;
  let fixture: ComponentFixture<ListDeviceColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDeviceColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeviceColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
