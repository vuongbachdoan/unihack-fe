import { Component } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import * as mock from '../mock/tenDayRecorded';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent {
  dataListFetch;
  result:any[] = [];
  isFetch: boolean = true;

  constructor(db: AngularFireDatabase) {
    this.dataListFetch = mock.oneDayRecordedMock;

    const maxW = 2000;

    let result: any[] = [];

    this.dataListFetch.map((value, index) => {

      let result1 = value.history.reduce(
        (partialSum, a) => partialSum + (Number(a.value) ?? 0),
        0
      ) / 2;

      let temp = {
        name:value.nameDevice,
        id: value.id,
        result: result1,
        message: result1 > (maxW - 100) ?  'The electricity you are consuming can be large, do you want to be optimal?':'Everything is OK!'
      }

      result.push(temp)
    });

    this.result = result

    this.render();
  }

  public render() {}
}
