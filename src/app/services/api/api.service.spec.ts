import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { of } from 'rxjs';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  describe('@get', () => {
    it('should call get from http', () => {
      const service: ApiService = TestBed.get(ApiService);
      const http: HttpClient = TestBed.get(HttpClient);
      const mockResponse: any = { msg: 'mock' };
      const spy = spyOn(http, 'get').and.returnValue(of(mockResponse));
      service.get('/status')
        .subscribe((response) => {
          expect(response).toEqual(mockResponse);
        });
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy.calls.argsFor(0)[0]).toContain('/status');
    });

    it('should call with absolute url if path includes "http"', () => {
      const service: ApiService = TestBed.get(ApiService);
      const http: HttpClient = TestBed.get(HttpClient);
      const path = 'http://api.example.com/status';
      const spy = spyOn(http, 'get');
      service.get(path);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy.calls.argsFor(0)[0]).toContain(path);
    });
  });
});
