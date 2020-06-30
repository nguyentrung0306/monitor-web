import {Component, ViewChild} from '@angular/core';
import {TooltipDirective} from '@progress/kendo-angular-tooltip';
import {Observable} from 'rxjs';
import {DataStateChangeEvent, GridDataResult} from '@progress/kendo-angular-grid';
import {State} from '@progress/kendo-data-query';
import {DemoService} from './demo.service';
import * as moment from 'moment';
import {FormBuilder, Validators} from '@angular/forms';
import {Moment} from 'moment';

@Component({
  templateUrl: 'demo.component.html'
})
export class DemoComponent {

  // Tooptip
  @ViewChild(TooltipDirective, { static: false })
  public tooltipDir: TooltipDirective;
  // Grid
  public pageableConfig = {
    buttonCount: 5,
    info: true,
    type: 'numeric',
    pageSizes: true,
    previousNext: true
  };
  public gridView: Observable<GridDataResult>;
  public gridUserSelection: number[] = [];
  public stateGrid: State = {
    skip: 0,
    take: 10
  };
  public isBodValid = true;
  dobDp: any;
  public listDataCbGender: Array<any> = [];
  result: any[];
  editForm = this.fb.group({
    username: [null, [Validators.required, Validators.maxLength(50), Validators.pattern('^[_A-Za-z0-9]*$')]],
    passwordHash: [
      null,
      [Validators.required, Validators.maxLength(50), Validators.minLength(6), Validators.pattern('^[A-Za-z0-9!@#$%^&*()]*$')]
    ],
    firstName: [null, [Validators.required, Validators.maxLength(50)]],
    lastName: [null, [Validators.required, Validators.maxLength(50)]],
    dob: [null, [Validators.required]],
    gender: [null, [Validators.required]],
    tel: [],
    address: [null, Validators.maxLength(255)],
    userType: [null, [Validators.required]]
  });
  constructor(
    private demoService: DemoService,
    private fb: FormBuilder,
  ) {
    this.gridView = demoService;
    this.listDataCbGender.push({code: 1, decode: 'Nam'});
    this.listDataCbGender.push({code: 2, decode: 'Nữ'});
  }

  save() {
  }

  // Grid
  public dataStateChange(state: DataStateChangeEvent): void {
    this.stateGrid = state;
    this.doQueryDataGrid(state);
  }

  public doQueryDataGrid(state: any) {
    this.demoService.querySearchGrid(state);
  }

  public doSearchCbGender(value) {
    const rs = [];
    rs.push({code: 1, decode: 'Nam'});
    rs.push({code: 2, decode: 'Nữ'});
    this.listDataCbGender = rs;
  }

  public checkBod(input: any) {
    if (this.editForm.get('dob').errors !== null || this.editForm.get('dob').errors !== undefined) {
      const currentYear = moment().year();
      const inputYear = input.year;
      this.isBodValid = currentYear - inputYear > 18 && currentYear - inputYear < 99;
    }
  }

  public showTooltip(e: MouseEvent): void {
    const element = e.target as HTMLElement;
    if (
      (element.nodeName === 'TD' || element.nodeName === 'TH') &&
      element.offsetWidth < element.scrollWidth &&
      element.innerText !== null &&
      element.innerText !== undefined &&
      element.innerText.trim() !== ''
    ) {
      this.tooltipDir.toggle(element);
    } else {
      this.tooltipDir.hide();
    }
  }

  getAll() {
    this.demoService.getAll().subscribe((res: any[]) => {
      this.result = res;
    });
  }
}
