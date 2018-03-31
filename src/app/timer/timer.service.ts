import { Injectable } from '@angular/core';
import { timer } from 'rxjs/observable/timer';
import {Observable} from "rxjs";

@Injectable()
export class TimerService {

  constructor() { }

  private clock: Observable<Date>;

  getTimer(): Observable<any>{
      const source = timer(1000, 1000);
      return source;
  }

    getClock(): Observable<Date> {
        return this.clock = Observable.interval(1000).map(tick => new Date()).share();
    }

}
