import { Service } from '@angular/core';
import { Product } from '../classes/iProducts';

@Service()
export class ProductService {
  products: Product[] = [
      { id: 1, name: 'Coca', price: 10.99, image_link: "https://www.coca-cola.com/content/dam/onexp/vn/vi/brands/coca-cola/vn-coca-cola.png" },
      { id: 2, name: 'Pepsi', price: 19.99, image_link: "https://bizweb.dktcdn.net/thumb/1024x1024/100/561/131/products/nuoc-ngot-pepsi-cola-390ml-3.webp?v=1756282253327" },
      { id: 3, name: 'Redbull', price: 5.99, image_link: "https://cdn.tgdd.vn/Products/Images/3226/76513/bhx/nuoc-tang-luc-redbull-lon-250ml-15112018162747.JPG" },
      { id: 4, name: 'Aquafina', price: 15.49, image_link: "https://sonhawater.com/wp-content/uploads/2019/10/aquafina-15-lit.jpg" },
      { id: 5, name: 'Lavie', price: 8.75, image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4fJmFTLdrn6Z6wUdf0Wnrnwk9p4w76Wm4YKVOeTn-1CatI9QIvi6Ljk2&s=10" }
     ];
    constructor(){}
    getProductList()
        {
            return this.products
        }
}
