import { Observable, of } from 'rxjs';

export default class ApiService {
  private mockResponse: any;

  setMockResponse(value: any): void {
    this.mockResponse = value;
  }

  get(): Observable<any> {
    return of(this.mockResponse);
  }
}
