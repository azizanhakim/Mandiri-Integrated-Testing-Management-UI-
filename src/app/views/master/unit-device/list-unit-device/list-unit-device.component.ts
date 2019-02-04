import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {DataTableDirective} from 'angular-datatables';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {UnitDeviceService} from '../unit-device.service';
import {UnitDeviceModel} from '../../../../entity/unit-device.model';

@Component({
  selector: 'app-list-unit-device',
  templateUrl: './list-unit-device.component.html',
  styleUrls: ['./list-unit-device.component.scss']
})
export class ListUnitDeviceComponent implements OnInit, AfterViewInit {

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
    private _service: UnitDeviceService) {
  }

  ngOnInit() {
    const that = this;
    this.searchBox = new FormGroup(
      {
        'unit_name': this._formBuilder.control('')
      }
    );

    this.dtOptions = {
      pagingType: 'full_numbers',
      serverSide: true,
      searching: false,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        const value: UnitDeviceModel = this.searchBox.value;
        that._service.datatables(value, dataTablesParameters).subscribe(resp => {
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: resp.data
          });
        }, error => {
          this._toastr.error('Can\' recived the data', 'List unit of device');
          callback({
            recordsTotal: 0,
            recordsFiltered: 0,
            data: []
          });
        });
      },
      columns: [
        {data: 'unit_id', title: 'ID'},
        {data: 'unit_name', title: 'Unit'},
        {
          data: 'unit_id',
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
      rowCallback: (row: Node, data: UnitDeviceModel, index: number) => {
        $('button#action-update', row).click(() => {
          this._router.navigate(['master', 'unit-device', data.unit_id]);
        });
        $('button#action-remove', row).click(() => {
          this.idDelete = data.unit_id;
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
        this._toastr.warning('Unit of device Removed', 'Remove Success',
          {
            timeOut: 4000
          });
        this.refresh(null);
      }
    }, error => {
      this._toastr.warning('Cant Delete Unit of device', 'Oppss...',
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
