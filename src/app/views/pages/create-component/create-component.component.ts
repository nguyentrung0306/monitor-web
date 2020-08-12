import {Component, Input, OnInit} from '@angular/core';
import {DemoService} from '../demo/demo.service';
import any = jasmine.any;

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {
  data: any[];
  constructor(
    private demoService: DemoService
  ) { }

  ngOnInit() {
    this.demoService.getAll().subscribe((res: any[]) => {
     this.data = res;
     console.log(this.data);
    });
  }

  generate() {
    console.log('---------Start gennerate component---------');
  }

}
