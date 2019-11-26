import { TestBed } from '@angular/core/testing';

import { ApiServiceDummy } from '../../../tests/index.spec';
import { ApiService } from '../api/api.service';
import { HelloWorldService } from './hello-world.service';
import { HelloWorld, HelloWorlType } from './helloWorld';

describe('HelloWorldService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: ApiService, useClass: ApiServiceDummy }
    ]
  }));

  it('should be created', () => {
    const service: HelloWorldService = TestBed.get(HelloWorldService);
    expect(service).toBeTruthy();
  });

  it('should return object correctly when getStatus is called', () => {
    const service: HelloWorldService = TestBed.get(HelloWorldService);
    const apiService: ApiServiceDummy = TestBed.get(ApiService);
    apiService.setMockResponse({ msg: 'Hello World' });
    const expected = new HelloWorld();
    expected[HelloWorlType.MSG] = 'Hello World';
    service.getStatus()
      .subscribe((response) => {
        expect(response).toEqual(expected);
      });
  });

  it('should return an array correctly when getStatusList is called', () => {
    const service: HelloWorldService = TestBed.get(HelloWorldService);
    const apiService: ApiServiceDummy = TestBed.get(ApiService);
    apiService.setMockResponse([{ msg: 'Hello World' }]);
    const expectedList = [];
    const obj = new HelloWorld();
    obj[HelloWorlType.MSG] = 'Hello World';
    expectedList.push(obj);
    service.getStatusList()
      .subscribe((response) => {
        expect(response).toEqual(expectedList);
      });
  });
});
