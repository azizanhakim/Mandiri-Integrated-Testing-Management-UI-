import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {DataTableDirective} from 'angular-datatables';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {DeviceService} from '../device.service';
import {DeviceModel} from '../../../../entity/device.model'; 

@Component({
  selector: 'app-list-device',
  templateUrl: './list-device.component.html',
  styleUrls: ['./list-device.component.scss']
})
export class ListDeviceComponent implements OnInit, AfterViewInit {

  idDelete: number;
  searchBox: FormGroup;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private _toastr: ToastrService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _service: DeviceService) {
  }

  ngOnInit() {
    const that = this;
    this.searchBox = new FormGroup(
      {
        'name': this._formBuilder.control('')
      }
    );

    this.dtOptions = {
      pagingType: 'full_numbers',
      serverSide: true,
      searching: false,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        const value: DeviceModel = this.searchBox.value;
        that._service.datatables(value, dataTablesParameters).subscribe(resp => {
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: resp.data
          });
        }, error => {
          this._toastr.error('Can\' recived the data', 'List of devices');
          callback({
            recordsTotal: 0,
            recordsFiltered: 0,
            data: []
          });
        });
      },
      columns: [
        {data: 'device_id', title: 'ID'},
        {data: 'device_name', title: 'Name'},
        {data: 'categoryDevice.category_name', title: 'Category of Device'},
        {data: 'colorDevice.color_name', title: 'Color of Device'},
        {data: 'brandDevice.brand_name', title: 'Brand of Device'},
        {data: 'conditionDevice.condition_status', title: 'Condition of Device'},
        {data: 'unitDevice.unit_name', title: 'Unit of Device'},
        {data: 'statusDevice.peminjaman_status', title: 'Status Rent of Device'},
        {
          data: 'id',
          title: 'Action',
          orderable: false,
          render: (data: any, type: any, row: any, meta) => {
            return `<button id="action-update" title="Edit Type" class="btn btn-link">
            <span class="fa actionMaster fa-edit"/></button>
                    <button id="action-remove" title="Delete Type" class="btn btn-link">
                    <span class="fa actionMaster fa-trash"/></button>
                    `;
          }
        }
      ],
      rowCallback: (row: Node, data: DeviceModel, index: number) => {
        $('button#action-update', row).click(() => {
          this._router.navigate(['master', 'device', data.device_id]);
        });
        $('button#action-remove', row).click(() => {
          this.idDelete = data.device_id;
          document.getElementById('openModal').click();
        });
        return row;
      }
    };
  }

  refresh(data): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  removed(): void {
    this._service.remove(this.idDelete).subscribe(data => {
      if (data.status === 200) {
        this._toastr.warning('Device Removed', 'Remove Success',
          {
            timeOut: 4000
          });
        this.refresh(null);
      }
    }, error => {
      this._toastr.warning('Cant Delete Device', 'Oppss...',
        {
          timeOut: 4000
        });
      console.error(error);
    });
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

}
