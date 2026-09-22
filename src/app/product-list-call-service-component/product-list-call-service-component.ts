import { Component } from '@angular/core';
import { Product } from '../classes/iProducts';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-list-call-service-component',
  standalone: false,
  styleUrl: './product-list-call-service-component.css',
  templateUrl: './product-list-call-service-component.html',
})
export class ProductListCallServiceComponent {
  products:Product[]=[]
  constructor(private ps:ProductService){
    // this.products = this.ps.getProductList();
// Không nạp dữ liệu từ dòng 14, nên comment lại
  }
  ngOnInit():void{
    this.products = this.ps.getProductList();
// Lúc này, các thành phần đã nạp đầy đủ lên trình duyệt (Vừa có dữ liệu trên bộ nhớ nhưng không thấy trên giao diện, test trên tập dữ liệu rất nhỏ)
  }
}
