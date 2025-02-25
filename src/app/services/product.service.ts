import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {id:1,title: 'iphone 14' , price: 1000 , quantity : 5 , like: 0 , img :'https://www.apple.com/euro/iphone-16/a/generic/images/meta/iphone-16_overview__fcivqu9d5t6q_og.png?202501150641'},
    {id:2,title: 'iphone 14' , price: 1000 , quantity : 5 , like: 0 , img :'https://www.apple.com/euro/iphone-16/a/generic/images/meta/iphone-16_overview__fcivqu9d5t6q_og.png?202501150641'},
    {id:3,title: 'iphone 15' , price: 2000 , quantity : 8 , like: 0 , img :'https://www.apple.com/euro/iphone-16/a/generic/images/meta/iphone-16_overview__fcivqu9d5t6q_og.png?202501150641'},
    {id:4,title: 'iphone 16' , price: 3000 , quantity : 2 , like: 0 , img :'https://www.apple.com/euro/iphone-16/a/generic/images/meta/iphone-16_overview__fcivqu9d5t6q_og.png?202501150641'},

  ]

  constructor() { }
}
