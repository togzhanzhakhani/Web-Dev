import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { Category, categories } from '../category';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = [...products];

  share(product: Product) {
    window.open("https://telegram.me/share/url?url=" + product.link + ">&text=<{{product.name}}>")
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  product: Product | undefined;
  
  constructor(private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const categoryFromRoute = String(routeParams.get('category'));
  
    // Find the product that correspond with the id provided in route.
    this.products = products.filter(product => product.category === categoryFromRoute);
  }

  delete(id: number){
    let index = this.products.findIndex(e => e.id === id);
    if(index !== -1){
      this.products.splice(index, 1);
    }
  }

  like(product: Product){
    product.likes++;
  }
}
