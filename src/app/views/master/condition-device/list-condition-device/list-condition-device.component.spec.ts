import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConditionDeviceComponent } from './list-condition-device.component';

describe('ListConditionDeviceComponent', () => {
  let component: ListConditionDeviceComponent;
  let fixture: ComponentFixture<ListConditionDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConditionDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConditionDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
