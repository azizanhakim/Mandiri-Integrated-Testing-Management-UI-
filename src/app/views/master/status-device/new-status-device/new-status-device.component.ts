import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StatusDeviceService} from '../status-device.service';
import {StatusDeviceModel} from '../../../../entity/status-device.model'; 

@Component({
  selector: 'app-new-status-device',
  templateUrl: './new-status-device.component.html',
  styleUrls: ['./new-status-device.component.scss']
})
export class NewStatusDeviceComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private _router: Router,
    private _service: StatusDeviceService,
    private _toastr: ToastrService,
    private _formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      'status': this._formBuilder.control('')
    });
  }

  send(data): void {
    this.submitted = true;
    if (this.form.invalid) {
      this._toastr.warning('Field Not Allowed Empty', 'Can\'t Save Change Type',
        {
          timeOut: 5000
        });
      return;
    }

    const value: StatusDeviceModel = this.form.value;
    this._service.save(value).subscribe(resp => {
      this._toastr.info('New Status of Device Saved', 'Save Success');
      this._router.navigate(['master', 'status-device']);
    }, error => {
      this._toastr.warning('There is something error', 'Oopss....');
    });
  }

  get f() {
    return this.form.controls;
  }
}
