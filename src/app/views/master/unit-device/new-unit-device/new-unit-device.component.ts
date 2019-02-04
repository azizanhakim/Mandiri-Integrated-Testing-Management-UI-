import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UnitDeviceService} from '../unit-device.service';
import {UnitDeviceModel} from '../../../../entity/unit-device.model'; 

@Component({
  selector: 'app-new-unit-device',
  templateUrl: './new-unit-device.component.html',
  styleUrls: ['./new-unit-device.component.scss']
})
export class NewUnitDeviceComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private _router: Router,
    private _service: UnitDeviceService,
    private _toastr: ToastrService,
    private _formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      'name': this._formBuilder.control('')
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

    const value: UnitDeviceModel = this.form.value;
    this._service.save(value).subscribe(resp => {
      this._toastr.info('New Unit of Device Saved', 'Save Success');
      this._router.navigate(['master', 'unit-device']);
    }, error => {
      this._toastr.warning('There is something error', 'Oopss....');
    });
  }

  get f() {
    return this.form.controls;
  }

}