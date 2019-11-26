import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private createUrl(path: string): string {
    const host = environment.host;
    return path.includes('http') ? path : `${host}${path}`;
  }

  public get(path: string, options: any = {}): Observable<any> {
    const url = this.createUrl(path);
    return this.http
      .get(url, options);
  }
}
