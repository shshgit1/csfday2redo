import { Component } from '@angular/core';
import { map } from 'rxjs';
import { item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day2redo';
  itemMap=new Map();


  constructor(){

  this.itemMap.set("Apple", new item("/assets/apple.JPG","Apple",0));
  this.itemMap.set("Orange",new item("/assets/orange.JPG","Orange",0));
  this.itemMap.set("Dog",new item("/assets/dog.JPG","Dog",0));
  console.log(this.itemMap)
  }
  addcart(key:string){

    let updatethis=this.itemMap.get(key);
    updatethis.quantity=updatethis.quantity+1
    console.log(key);
    console.log(this.itemMap);
  }


}
