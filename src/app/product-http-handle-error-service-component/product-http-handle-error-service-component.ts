import { Component, signal } from '@angular/core';
import { Product } from '../classes/iProducts';
import { ProductHttpHandleErrorService } from '../services/product-http-handle-error-serviceproduct-http-handle-error-service';

@Component({
  selector: 'app-product-http-handle-error-service-component',
  standalone: false,
  styleUrl: './product-http-handle-error-service-component.css',
  templateUrl: './product-http-handle-error-service-component.html',
})
export class ProductHttpHandleErrorServiceComponent {
  products = signal<Product[]>([]);
  private allProducts = signal<Product[]>([]);
  errMessage = signal('');
  min_price = 0;
  max_price = 10;

  constructor(private _service: ProductHttpHandleErrorService) {}

  ngOnInit(): void {
    this._service.getProductList().subscribe({
      next: (data) => {
        this.allProducts.set(data);
        this.products.set(data);
      },
      error: (err) => {
        this.errMessage.set(err.message);
      },
    });
  }

  callFilterProductListByPrice(): void {
    const filteredProducts = this.allProducts().filter(
      (product) => product.price >= this.min_price && product.price <= this.max_price,
    );
    this.products.set(filteredProducts);
  }
}
