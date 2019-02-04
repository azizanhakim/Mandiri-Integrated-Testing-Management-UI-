import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {UnitDeviceService} from '../unit-device.service';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UnitDeviceModel} from '../../../../entity/unit-device.model';

@Component({
  selector: 'app-update-unit-device',
  templateUrl: './update-unit-device.component.html',
  styleUrls: ['./update-unit-device.component.scss']
})
export class UpdateUnitDeviceComponent implements OnInit, OnDestroy {

  private subcribeTopic: Subscription;
  form: FormGroup;
  submitted = false;

  constructor(
    private _router: Router,
    private _service: UnitDeviceService,
    private _activeRoute: ActivatedRoute,
    private _toastr: ToastrService,
    private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      id: this._formBuilder.control('', Validators.required),
      name: this._formBuilder.control('', Validators.required)
    });

    this.subcribeTopic = this._activeRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this._service.getChangeTypes(id).subscribe((response: any) => {
        if (response.status === 204) {
          this._router.navigate(['master', 'unit-device']);
        } else {
          const value: UnitDeviceModel = response.body;
          console.log(value);
          this.form.setValue({
              'id': value.unit_id,
              'name': value.unit_name
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
    const value: UnitDeviceModel = this.form.value;
    this._service.update(value).subscribe(resp => {
      this._toastr.info('Change a unit of device', 'Update Success');
      this._router.navigate(['master', 'unit-device']);
    }, error => {
      this._toastr.warning('Cant Update a unit of device', 'Oppss...');
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
