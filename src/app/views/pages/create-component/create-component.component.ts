import {Component, Input, OnInit} from '@angular/core';
import {DemoService} from '../demo/demo.service';
// import any = jasmine.any;

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {
  constructor(
    private demoService: DemoService
  ) { }
  data: any[];
   user = [
    {
      'id': 1,
      'name': 'Leanne Graham',
      'username': 'Bret',
      'email': 'Sincere@april.biz',
      'address': {
        'street': 'Kulas Light',
        'suite': 'Apt. 556',
        'city': 'Gwenborough',
        'zipcode': '92998-3874',
        'geo': {
          'lat': '-37.3159',
          'lng': '81.1496'
        }
      },
      'phone': '1-770-736-8031 x56442',
      'website': 'hildegard.org',
      'company': {
        'name': 'Romaguera-Crona',
        'catchPhrase': 'Multi-layered client-server neural-net',
        'bs': 'harness real-time e-markets'
      }
    }
  ];
  ngOnInit() {
    // console.log(Object.values(this.user));
    // const result = [];
    // const getFlatten = (arr) => {
    //   arr.forEach(data => {
    //     if (Array.isArray(data)) {
    //       data.forEach(dt => {
    //         if (dt.toString()) {
    //           console.log(dt);
    //         }
    //       });
    //       getFlatten(data);
    //     } else {
    //       result.push(data);
    //     }
    //   });
    //   return result;
    // };

    // console.log(getFlatten(this.user));
    // this.demoService.getAll().subscribe((res: any[]) => {
    //  this.data = res;
    //  console.log(this.data);
    // });
  }

  generate() {
    console.log('---------Start gennerate component---------');
  }
}
