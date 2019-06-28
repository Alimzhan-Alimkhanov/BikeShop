/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Main_serviceService } from './main_service.service';

describe('Service: Main_service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Main_serviceService]
    });
  });

  it('should ...', inject([Main_serviceService], (service: Main_serviceService) => {
    expect(service).toBeTruthy();
  }));
});
