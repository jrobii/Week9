import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ProductsService } from '../services/products.service';
import {trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css'],
  animations: [
    trigger('iderrorState', [
      state('show', style({
        opacity:1,
        display:'block'
      })),
      state('hide', style({
        opacity:0,
        display:'none'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('400ms ease-in')),
    ]),
    trigger('noticeState', [
      state('show', style({
        opacity:1,
        display:'block'
      })),
      state('hide', style({
        opacity:0,
        display:'none'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('400ms ease-in')),
    ])
  ]
})
export class NewproductComponent implements OnInit {

  productname:string = "";
  productdesc:string = "";
  productprice:number = null;
  productunits:number = null;
  productid:number = null;
  newProductMessage:string = "";
  iderrormsg:string = "This ID is taken! A different ID is required.";
  iderrormsg2:string = "";
  iderrorshow:boolean = false;
  noticeshow:boolean = false;


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  get stateName() {
    return this.iderrorshow ? 'show':'hide';
  }

  get noticeName() {
    return this.noticeshow ? 'show':'hide';
  }

  addnewProduct(event) {
    event.preventDefault();
    if(this.productid == null) {
      this.iderrorshow = !this.iderrorshow;
    } else {
      this.productsService.add(this.productid, this.productname, this.productdesc, this.productprice, this.productunits).subscribe((data:any) => {
        this.noticeshow = true;
        if (data.err == null) {
          this.newProductMessage = data.num + " The new product: " + this.productname + " has been added."
        } else {
          this.newProductMessage = data.err;
        }
        this.productid = null;
        this.productname = "";
        this.productdesc = "";
        this.productprice = null;
        this.productunits = null;
      });
    }
  }

  checkid(event) {
    this.noticeshow = false;
    this.productsService.checkid(event).subscribe((data:any) => {
      if  (data.success == 0) {
        this.iderrormsg2 = "Try an ID above " + data.topnum;
        this.iderrorshow = !this.iderrorshow;
      } else {
        this.iderrorshow = false;
        this.iderrormsg2 = null;
      }
    })
  }
}
