import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent {
  dataListFetch;
  isFetch: boolean = true;

  constructor(db: AngularFireDatabase) {
    this.dataListFetch = db.list('DeviceList').valueChanges()
  }
}
