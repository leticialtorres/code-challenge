import { TestBed } from '@angular/core/testing';

import { HomeRestService } from '../home-rest.service';

describe('HomeRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeRestService = TestBed.get(HomeRestService);
    expect(service).toBeTruthy();
  });
});
