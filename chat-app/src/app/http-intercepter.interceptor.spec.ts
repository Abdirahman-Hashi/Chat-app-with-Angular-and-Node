import { TestBed } from '@angular/core/testing';

import { HttpIntercepterInterceptor } from './http-intercepter.interceptor';

describe('HttpIntercepterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpIntercepterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpIntercepterInterceptor = TestBed.inject(HttpIntercepterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
