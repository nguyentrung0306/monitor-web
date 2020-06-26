import {Injectable} from '@angular/core';
import {NgbDatepickerI18n, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

/*TungBT 27-12-209*/
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
  private I18N_VALUES = {
    vi: {
      weekdays: ['Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7', 'CN'],
      months: ['Thg 1', 'Thg 2', 'Thg 3', 'Thg 4', 'Thg 5', 'Thg 6', 'Thg 7', 'Thg 8', 'Thg 9', 'Thg 10', 'Thg 11', 'Thg 12'],
    }
  };

  constructor() {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return this.I18N_VALUES['vi'].weekdays[weekday - 1];
  }

  getMonthShortName(month: number): string {
    return this.I18N_VALUES['vi'].months[month - 1];
  }

  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return 'DayAriaLabelTest';
  }
}
