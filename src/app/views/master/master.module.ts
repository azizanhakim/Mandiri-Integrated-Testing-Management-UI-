import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MasterRouting} from './master.routing';
import {ListCategoryDeviceComponent} from './category-device/list-category-device/list-category-device.component';
import {NewCategoryDeviceComponent} from './category-device/new-category-device/new-category-device.component';
import {UpdateCategoryDeviceComponent} from './category-device/update-category-device/update-category-device.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {CategoryDeviceService} from './category-device/category-device.service';
import {AuthenticationInterceptor} from '../../_auth/auth.interceptor';
import {DataTablesModule} from 'angular-datatables';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AlertModule, ModalModule} from 'ngx-bootstrap';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import { ListDeviceColorComponent } from './device-color/list-device-color/list-device-color.component';
import { NewDeviceColorComponent } from './device-color/new-device-color/new-device-color.component';
import { UpdateDeviceColorComponent } from './device-color/update-device-color/update-device-color.component';
import { DeviceColorService } from './device-color/device-color.service';
import { ListBrandDeviceComponent } from './brand-device/list-brand-device/list-brand-device.component';
import { NewBrandDeviceComponent } from './brand-device/new-brand-device/new-brand-device.component';
import { UpdateBrandDeviceComponent } from './brand-device/update-brand-device/update-brand-device.component';
import { BrandDeviceService } from './brand-device/brand-device.service';
import { ListConditionDeviceComponent } from './condition-device/list-condition-device/list-condition-device.component';
import { NewConditionDeviceComponent } from './condition-device/new-condition-device/new-condition-device.component';
import { UpdateConditionDeviceComponent } from './condition-device/update-condition-device/update-condition-device.component'
import {ConditionDeviceService} from './condition-device/condition-device.service';
import { ListUnitDeviceComponent } from './unit-device/list-unit-device/list-unit-device.component';
import { NewUnitDeviceComponent } from './unit-device/new-unit-device/new-unit-device.component';
import { UpdateUnitDeviceComponent } from './unit-device/update-unit-device/update-unit-device.component';
import { UnitDeviceService } from './unit-device/unit-device.service';
import { ListDeviceComponent } from './device/list-device/list-device.component';
import { NewDeviceComponent } from './device/new-device/new-device.component';
import { UpdateDeviceComponent } from './device/update-device/update-device.component';
import { ListStatusDeviceComponent } from './status-device/list-status-device/list-status-device.component';
import { NewStatusDeviceComponent } from './status-device/new-status-device/new-status-device.component';
import { UpdateStatusDeviceComponent } from './status-device/update-status-device/update-status-device.component';
import { StatusDeviceService } from './status-device/status-device.service';
import { DeviceService } from './device/device.service';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    MasterRouting,
    AlertModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    ModalModule.forRoot(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    ListCategoryDeviceComponent,
    NewCategoryDeviceComponent,
    UpdateCategoryDeviceComponent,
    ListDeviceColorComponent,
    NewDeviceColorComponent,
    UpdateDeviceColorComponent,
    ListBrandDeviceComponent,
    NewBrandDeviceComponent,
    UpdateBrandDeviceComponent,
    ListConditionDeviceComponent,
    NewConditionDeviceComponent,
    UpdateConditionDeviceComponent,
    ListUnitDeviceComponent,
    NewUnitDeviceComponent,
    UpdateUnitDeviceComponent,
    ListDeviceComponent,
    NewDeviceComponent,
    UpdateDeviceComponent,
    ListStatusDeviceComponent,
    NewStatusDeviceComponent,
    UpdateStatusDeviceComponent
  ], providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthenticationInterceptor
    },
    CategoryDeviceService,
    DeviceColorService,
    BrandDeviceService,
    ConditionDeviceService,
    UnitDeviceService,
    StatusDeviceService,
    DeviceService
  ]
})
export class MasterModule {
}
