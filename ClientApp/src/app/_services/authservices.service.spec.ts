/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthservicesService } from './authservices.service';

describe('Service: Authservices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthservicesService]
    });
  });

  it('should ...', inject([AuthservicesService], (service: AuthservicesService) => {
    expect(service).toBeTruthy();
  }));
});
