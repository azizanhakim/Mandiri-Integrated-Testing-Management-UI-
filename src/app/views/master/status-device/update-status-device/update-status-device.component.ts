import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {StatusDeviceService} from '../status-device.service';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StatusDeviceModel} from '../../../../entity/status-device.model';

@Component({
  selector: 'app-update-status-device',
  templateUrl: './update-status-device.component.html',
  styleUrls: ['./update-status-device.component.scss']
})
export class UpdateStatusDeviceComponent implements OnInit, OnDestroy {

  private subcribeTopic: Subscription;
  form: FormGroup;
  submitted = false;

  constructor(
    private _router: Router,
    private _service: StatusDeviceService,
    private _activeRoute: ActivatedRoute,
    private _toastr: ToastrService,
    private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      id: this._formBuilder.control('', Validators.required),
      status: this._formBuilder.control('', Validators.required)
    });

    this.subcribeTopic = this._activeRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this._service.getChangeTypes(id).subscribe((response: any) => {
        if (response.status === 204) {
          this._router.navigate(['master', 'status-device']);
        } else {
          const value: StatusDeviceModel = response.body;
          console.log(value);
          this.form.setValue({
              'id': value.peminjaman_id,
              'status': value.peminjaman_status
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
    const value: StatusDeviceModel = this.form.value;
    this._service.update(value).subscribe(resp => {
      this._toastr.info('Change a status of device', 'Update Success');
      this._router.navigate(['master', 'status-device']);
    }, error => {
      this._toastr.warning('Cant Update a status of device', 'Oppss...');
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
