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
import {ListConditionDeviceComponent} from './condition-device/list-condition-device/list-condition-device.component';
import { NewConditionDeviceComponent } from './condition-device/new-condition-device/new-condition-device.component';
import {UpdateConditionDeviceComponent} from './condition-device/update-condition-device/update-condition-device.component';
import {ListUnitDeviceComponent} from './unit-device/list-unit-device/list-unit-device.component';
import { NewUnitDeviceComponent } from './unit-device/new-unit-device/new-unit-device.component';
import {UpdateUnitDeviceComponent} from './unit-device/update-unit-device/update-unit-device.component';
import { ListStatusDeviceComponent } from './status-device/list-status-device/list-status-device.component';
import { NewStatusDeviceComponent } from './status-device/new-status-device/new-status-device.component';
import { UpdateStatusDeviceComponent } from './status-device/update-status-device/update-status-device.component';
import { ListDeviceComponent } from './device/list-device/list-device.component';
import { NewDeviceComponent } from './device/new-device/new-device.component';
import { UpdateDeviceComponent } from './device/update-device/update-device.component';

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
      },
      {
        path: 'condition-device',
        component: ListConditionDeviceComponent,
        data: {
          title: 'Condition of Devices'
        }
      },
      {
        path: 'condition-device/new',
        component: NewConditionDeviceComponent,
        data: {
          title: 'New condition of device'
        }
      },
      {
        path: 'condition-device/:id',
        component: UpdateConditionDeviceComponent,
        data: {
          title: 'Update a condition of device'
        }
      },
      {
        path: 'unit-device',
        component: ListUnitDeviceComponent,
        data: {
          title: 'Unit of Devices'
        }
      },
      {
        path: 'unit-device/new',
        component: NewUnitDeviceComponent,
        data: {
          title: 'New unit of device'
        }
      },
      {
        path: 'unit-device/:id',
        component: UpdateUnitDeviceComponent,
        data: {
          title: 'Update a unit of device'
        }
      },
      {
        path: 'status-device',
        component: ListStatusDeviceComponent,
        data: {
          title: 'Unit of Devices'
        }
      },
      {
        path: 'status-device/new',
        component: NewStatusDeviceComponent,
        data: {
          title: 'New unit of device'
        }
      },
      {
        path: 'status-device/:id',
        component: UpdateStatusDeviceComponent,
        data: {
          title: 'Update a unit of device'
        }
      },
      {
        path: 'device',
        component: ListDeviceComponent,
        data: {
          title: 'Unit of Devices'
        }
      },
      {
        path: 'device/new',
        component: NewDeviceComponent,
        data: {
          title: 'New unit of device'
        }
      },
      {
        path: 'device/:id',
        component: UpdateDeviceComponent,
        data: {
          title: 'Update a unit of device'
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
