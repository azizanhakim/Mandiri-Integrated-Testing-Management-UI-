import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCategoryDeviceComponent} from './category-device/list-category-device/list-category-device.component';
import {NewCategoryDeviceComponent} from './category-device/new-category-device/new-category-device.component';
import {UpdateCategoryDeviceComponent} from './category-device/update-category-device/update-category-device.component';
import { ListDeviceColorComponent } from './device-color/list-device-color/list-device-color.component';
import { NewDeviceColorComponent } from './device-color/new-device-color/new-device-color.component';
import { UpdateDeviceColorComponent } from './device-color/update-device-color/update-device-color.component';
import { ListBrandDeviceComponent } from './brand-device/list-brand-device/list-brand-device.component';
import {NewBrandDeviceComponent} from './brand-device/new-brand-device/new-brand-device.component';
import {UpdateBrandDeviceComponent} from './brand-device/update-brand-device/update-brand-device.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master'
    },
    children: [
      {
        path: 'category-device',
        component: ListCategoryDeviceComponent,
        data: {
          title: 'Category of Devices'
        }
      },
      {
        path: 'category-device/new',
        component: NewCategoryDeviceComponent,
        data: {
          title: 'New category of device'
        }
      },
      {
        path: 'category-device/:id',
        component: UpdateCategoryDeviceComponent,
        data: {
          title: 'Update a category of device'
        }
      },
      {
        path: 'color-device',
        component: ListDeviceColorComponent,
        data: {
          title: 'Color of Devices'
        }
      },
      {
        path: 'color-device/new',
        component: NewDeviceColorComponent,
        data: {
          title: 'New color of device'
        }
      },
      {
        path: 'color-device/:id',
        component: UpdateDeviceColorComponent,
        data: {
          title: 'Update a color of device'
        }
      },
      {
        path: 'brand-device',
        component: ListBrandDeviceComponent,
        data: {
          title: 'Brand of Devices'
        }
      },
      {
        path: 'brand-device/new',
        component: NewBrandDeviceComponent,
        data: {
          title: 'New brand of device'
        }
      },
      {
        path: 'brand-device/:id',
        component: UpdateBrandDeviceComponent,
        data: {
          title: 'Update a brand of device'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRouting {
}
