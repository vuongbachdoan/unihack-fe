import { Component } from '@angular/core';
import * as mock from '../mock/tenDayRecorded';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable, Subject, takeUntil } from 'rxjs';
import { generateSuggestion } from '../utils/utils';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent {
  dataListFetch;
  result: any[] = [];
  isFetch: boolean = true;


  constructor(private db: AngularFireDatabase) {
    this.dataListFetch = mock.oneDayRecordedMock;

    const maxW = 2000;

    let result: any[] = [];

    this.dataListFetch.map((value, index) => {

      let result1 = value.history.reduce(
        (partialSum, a) => partialSum + (Number(a.value) ?? 0),
        0
      ) / 2;

      let temp = {
        name: value.nameDevice,
        id: value.id,
        result: result1,
        message: result1 > (maxW - 100) ? 'The electricity you are consuming can be large, do you want to be optimal?' : 'Everything is OK!',
        duration: generateSuggestion(value.history)
      }

      result.push(temp)
    });

    this.result = result
  }
  observable$!: Observable<any>;
  unsubscribe$: Subject<void> = new Subject<void>();


  ngOnInit() {
    this.observable$ = this.db.list('DeviceList').valueChanges()
    this.observable$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => {
        this.dataListFetch = value
        console.log(this.dataListFetch)
      });
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  toastTrigger: boolean = false;
  handleSetTime() {
    this.toastTrigger = true;

    setTimeout(() => {
      this.toastTrigger = false;
    }, 3000)
  }
  closeToast() {
    this.toastTrigger = false;
  }
}
