import {Component, OnInit, ViewChild} from '@angular/core';
import {TooltipDirective} from '@progress/kendo-angular-tooltip';
import {Observable} from 'rxjs';
import {DataStateChangeEvent, GridDataResult} from '@progress/kendo-angular-grid';
import {State} from '@progress/kendo-data-query';
import {FormBuilder, Validators} from '@angular/forms';
import {DemoService} from '../demo/demo.service';
import * as moment from 'moment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // Tooptip
  @ViewChild(TooltipDirective, {static: false})
  public tooltipDir: TooltipDirective;
  // Grid
  public pageableConfig = {
    buttonCount: 5,
    info: true,
    type: 'numeric',
    pageSizes: true,
    previousNext: true
  };
  public gridView: GridDataResult;
  public gridUserSelection: number[] = [];
  public stateGrid: State = {
    skip: 0,
    take: 10
  };
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
  ) {}

  // Grid
  public dataStateChange(state: DataStateChangeEvent): void {
    this.stateGrid = state;
    this.gridView = {
      data: this.result.slice(this.stateGrid.skip, this.stateGrid.skip + this.stateGrid.take),
      total: this.result.length
    };
    // this.doQueryDataGrid(state);
  }

  public doQueryDataGrid(state: any) {
    this.demoService.querySearchGrid(state);
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
      if (res == null) {
        this.result = [];
      } else {
        this.result = res;
      }
      this.gridView = {
        data: this.result.slice(this.stateGrid.skip, this.stateGrid.skip + this.stateGrid.take),
        total: this.result.length
      };
    });
  }
  delete(gridUserSelection) {
    console.log('my selection', gridUserSelection);
    this.demoService.deleteByListId(gridUserSelection);
  }

  ngOnInit() {
  }

}
