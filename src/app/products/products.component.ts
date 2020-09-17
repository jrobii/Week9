import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from  '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService, private router: Router) { }

  products:[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data:any) => {
      this.products = data;
    });
  }

  deleteproduct(id) {
    if (confirm("Are you sure you want to delete this?")) {
      this.productService.deleteItem(id).subscribe((data:any) => {
        this.products = data;
      });
    }
  }

}
