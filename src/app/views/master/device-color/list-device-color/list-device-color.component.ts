import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {DataTableDirective} from 'angular-datatables';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {DeviceColorService} from '../device-color.service';
import { DeviceColor } from '../../../../entity/color-device.model';

@Component({
  selector: 'app-list-device-color',
  templateUrl: './list-device-color.component.html',
  styleUrls: ['./list-device-color.component.scss'] 
})
export class ListDeviceColorComponent implements OnInit {
  
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
    private _service: DeviceColorService
  ) {
  }

  ngOnInit() {
    const that = this;
    this.searchBox = new FormGroup(
      {
        'color_name': this._formBuilder.control('')
      }
    );
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      serverSide: true,
      searching: false,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        const value: DeviceColor = this.searchBox.value;
        that._service.datatables(value, dataTablesParameters).subscribe(resp => {
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: resp.data
          });
        }, error => {
          this._toastr.error('Can\' recived the data', 'List color of device');
          callback({
            recordsTotal: 0,
            recordsFiltered: 0,
            data: []
          });
        });
      },
      columns: [
        {data: 'color_id', title: 'ID'},
        {data: 'color_name', title: 'Name'},
        {data: 'color_code', title: 'Hex Color Code'},
        {data: 'color_description', title: 'Description'},
        {
          data: 'color_id',
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
      rowCallback: (row: Node, data: DeviceColor, index: number) => {
        $('button#action-update', row).click(() => {
          this._router.navigate(['master', 'color-device', data.color_id]);
        });
        $('button#action-remove', row).click(() => {
          this.idDelete = data.color_id;
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
        this._toastr.warning('Color of device Removed', 'Remove Success',
          {
            timeOut: 4000
          });
        this.refresh(null);
      }
    }, error => {
      this._toastr.warning('Cant Delete Color of device', 'Oppss...',
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

