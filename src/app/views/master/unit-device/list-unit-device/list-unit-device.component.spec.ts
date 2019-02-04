import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUnitDeviceComponent } from './list-unit-device.component';

describe('ListUnitDeviceComponent', () => {
  let component: ListUnitDeviceComponent;
  let fixture: ComponentFixture<ListUnitDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUnitDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUnitDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
