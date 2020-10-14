import {Component, Input, OnInit} from '@angular/core';
import {isObject} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-template-component',
  templateUrl: './template-component.component.html',
  styleUrls: ['./template-component.component.scss']
})
export class TemplateComponentComponent implements OnInit {
  @Input() dataSub: any;
  fieldList: string[] = [];
  fieldListKey = [];

  constructor() {
  }

  ngOnInit() {
    this.fieldList = Object.getOwnPropertyNames(this.dataSub);
    for (const fr of this.fieldList) {
      if (isObject(this.dataSub[fr])) {
        for (const f of (Object.getOwnPropertyNames(this.dataSub[fr]))) {
          console.log(f, this.dataSub[fr][f]);
          this.fieldListKey.push({ [f] : this.dataSub[fr][f]});
          console.log(f);
        }
      }
    }
    console.log(this.fieldListKey);
    // this.fieldListKey = Object.getOwnPropertyNames(this.dataSub.address);
    // this.fieldList = this.fieldList.concat(this.fieldListKey);
    // console.log('this is array after concat', this.fieldList.concat(this.fieldListKey));
    // for (const u of this.fieldList) {
    //   if (Object.getOwnPropertyNames(this.dataSub[u]).length > 0) {
    //     console.log('Is it');
    //     console.log(this.dataSub[u]);
    //   }
    // }
  }
}
