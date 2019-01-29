import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBrandDeviceComponent } from './list-brand-device.component';

describe('ListBrandDeviceComponent', () => {
  let component: ListBrandDeviceComponent;
  let fixture: ComponentFixture<ListBrandDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBrandDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBrandDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
