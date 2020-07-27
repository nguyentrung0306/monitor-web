// Angular
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

// Components Routing
import { PagesRoutingModule } from './pages-routing.module';
import { DemoComponent } from './demo/demo.component';
import {TooltipModule} from '@progress/kendo-angular-tooltip';
import {BodyModule, ColumnMenuModule, GridModule, SharedModule} from '@progress/kendo-angular-grid';
// Lib
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {NgbDateParserFormatter, NgbDatepickerI18n, NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateFormatterCustom} from '../../utils/NgbDateFormatterCustom';
import {CustomDatepickerI18n} from '../../utils/CustomDatepickerI18n';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    TooltipModule,
    GridModule,
    ColumnMenuModule,
    BodyModule,
    SharedModule,
    ReactiveFormsModule,
    DropDownsModule,
    NgbDatepickerModule,
  ],
  providers: [
    { provide: NgbDateParserFormatter, useClass: NgbDateFormatterCustom },
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}
  ],
  declarations: [
    DemoComponent,
    UserComponent
  ]
})
export class PagesModule { }
