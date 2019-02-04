import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {DeviceColorService} from '../device-color.service';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DeviceColor} from '../../../../entity/color-device.model';

@Component({
  selector: 'app-update-device-color',
  templateUrl: './update-device-color.component.html',
  styleUrls: ['./update-device-color.component.scss']
})
export class UpdateDeviceColorComponent implements OnInit, OnDestroy {

  private subcribeTopic: Subscription;
  form: FormGroup;
  submitted = false;

  constructor(
    private _router: Router,
    private _service: DeviceColorService,
    private _activeRoute: ActivatedRoute,
    private _toastr: ToastrService,
    private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      id: this._formBuilder.control('', Validators.required),
      name: this._formBuilder.control('', Validators.required),
      code: this._formBuilder.control('', Validators.required),
      description: this._formBuilder.control('')
    });

    this.subcribeTopic = this._activeRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this._service.getChangeTypes(id).subscribe((response: any) => {
        if (response.status === 204) {
          this._router.navigate(['master', 'color-device']);
        } else {
          const value: DeviceColor = response.body;
          console.log(value);
          this.form.setValue({
              'id': value.color_id,
              'name': value.color_name,
              'code': value.color_code,
              'description': value.color_description
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
    const value: DeviceColor = this.form.value;
    this._service.update(value).subscribe(resp => {
      this._toastr.info('Change a color of device', 'Update Success');
      this._router.navigate(['master', 'color-device']);
    }, error => {
      this._toastr.warning('Cant Update a color of device', 'Oppss...');
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
