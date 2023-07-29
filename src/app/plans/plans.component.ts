import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent {
  dataListFetch: any;
  isFetch: boolean = true;

  constructor(private db: AngularFireDatabase) {
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
}
