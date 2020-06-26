import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {GridDataResult} from '@progress/kendo-angular-grid';

@Injectable({ providedIn: 'root' })
export class DemoService extends BehaviorSubject<any> {
  constructor(protected http: HttpClient) {
    super(null);
  }

  // Grid
  public querySearchGrid(state: any): void {
    this.fetchSearchGrid(state).subscribe(x => super.next(x));
  }

  protected fetchSearchGrid(state: any): Observable<GridDataResult> {
    return this.http
      .post(`/searchAndSortData`, { skip: state.skip, take: state.take, sort: state.sort})
      .pipe(
        map(
          response =>
            <GridDataResult>{
              data: response['datas'],
              total: response['total']
            }
        )
      );
  }
  // End grid
}