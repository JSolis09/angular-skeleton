import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../api/api.service';
import { mapResponseObject, mapResponseArray } from '../../utils/helpers';
import { HelloWorld } from './helloWorld';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  constructor(private http: ApiService) { }

  public getStatus(): Observable<HelloWorld> {
    const uri = 'http://demo4223491.mockable.io/status';
    return this.http
      .get(uri)
      .pipe(
        map((response) => mapResponseObject<HelloWorld>(response)(HelloWorld))
      );
  }

  public getStatusList(): Observable<HelloWorld[]> {
    const uri = 'http://demo4223491.mockable.io/todos';
    return this.http
      .get(uri)
      .pipe(
        map((response) => mapResponseArray<HelloWorld>(response)(HelloWorld))
      );
  }
}
