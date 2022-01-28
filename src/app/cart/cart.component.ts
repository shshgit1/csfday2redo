import { Component, Input, OnInit } from '@angular/core';
import { item } from '../item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cartlist=new Map();

  constructor() { }

  ngOnInit(): void {
  }

  removecart(key:string){
  let remthis=this.cartlist.get(key);
    remthis.quantity=0;
  }

}
