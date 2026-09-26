import { TestBed } from '@angular/core/testing';
import { ProductHttpHandleErrorServiceproductHttpHandleErrorService } from './product-http-handle-error-serviceproduct-http-handle-error-service';

describe('ProductHttpHandleErrorServiceproductHttpHandleErrorService', () => {
  let service: ProductHttpHandleErrorServiceproductHttpHandleErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductHttpHandleErrorServiceproductHttpHandleErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
