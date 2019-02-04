import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {DeviceService} from '../device.service';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DeviceModel } from '../../../../entity/device.model';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.scss']
})
export class UpdateDeviceComponent implements OnInit, OnDestroy {

  private subcribeTopic: Subscription;
  form: FormGroup;
  submitted = false;

  constructor(
    private _router: Router,
    private _service: DeviceService,
    private _activeRoute: ActivatedRoute,
    private _toastr: ToastrService,
    private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      id: this._formBuilder.control('', Validators.required),
      name: this._formBuilder.control('', Validators.required),
      category_name: this._formBuilder.control('', Validators.required),
      color_name: this._formBuilder.control('', Validators.required),
      brand_name: this._formBuilder.control('', Validators.required),
      condition_status: this._formBuilder.control('', Validators.required),
      unit_name: this._formBuilder.control('', Validators.required),
      peminjaman_status: this._formBuilder.control('', Validators.required)
    });

    this.subcribeTopic = this._activeRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this._service.getChangeTypes(id).subscribe((response: any) => {
        if (response.status === 204) {
          this._router.navigate(['master', 'device']);
        } else {
          const value: DeviceModel = response.body;
          console.log(value);
          this.form.setValue({
              'id': value.device_id,
              'name': value.device_name,
              'category_name': value.categoryDevice,
              'color_name': value.colorDevice,
              'brand_name': value.brandDevice,
              'condition_status': value.conditionDevice,
              'unit_name': value.unitDevice,
              'peminjaman_status': value.statusDevice
            }
          );
        }
      });
    });
  }

  send(data): void {
    this.submitted = true;
    if (this.form.invalid) {
      this._toastr.warning('Field Not Allowed Empty', 'Can\'t Update Change Type',
        {
          timeOut: 5000
        });
      return;
    }
    const value: DeviceModel = this.form.value;
    this._service.update(value).subscribe(resp => {
      this._toastr.info('Change a device', 'Update Success');
      this._router.navigate(['master', 'device']);
    }, error => {
      this._toastr.warning('Cant Update a device', 'Oppss...');
      console.error('Can\'t be saved');
    });
  }

  get f() {
    return this.form.controls;
  }

  ngOnDestroy(): void {
    this.subcribeTopic.unsubscribe();
  }

}
