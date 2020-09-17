import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  productidRoute;
  productid:number = null;
  productname:string = "";
  productdesc:string = "";
  productprice:number = null;
  productunits:number = null;

  constructor(private productService: ProductsService, private idroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idroute.paramMap.subscribe((params) => {
      this.productidRoute = params.get('id');
    });
    this.productService.getItem(this.productidRoute).subscribe((data:any) => {
      this.productid = data.id;
      this.productname = data.name;
      this.productdesc = data.description;
      this.productprice = data.price;
      this.productunits = data.units;
    });
  }

  updateProduct() {
    this.productService.updateItem(this.productidRoute, this.productname, this.productdesc, this.productprice, this.productunits).subscribe((data:any) => {
      this.router.navigateByUrl('');
    });
  }

}
