import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

/*TungBT 27-12-209*/

export class NgbDateFormatterCustom extends NgbDateParserFormatter {
  readonly DT_FORMAT = 'DD/MM/YYYY';

  parse(value: string): NgbDateStruct {
    if (value) {
      value = value.trim();
      const mdt = moment(value, this.DT_FORMAT);
      const dataStruct = {
        day: parseInt(mdt.format('DD'), 10),
        month: parseInt(mdt.format('MM'), 10),
        year: parseInt(mdt.format('YYYY'), 10)
      };
      return dataStruct;
    }
    return null;
  }
  format(date: NgbDateStruct): string {
    if (!date) {
      return '';
    }
    const mdt = moment([date.year, date.month - 1, date.day]);
    if (!mdt.isValid()) {
      return '';
    }
    return mdt.format(this.DT_FORMAT);
  }
}
