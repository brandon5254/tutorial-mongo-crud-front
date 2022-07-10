import { Product } from './../model/product';
import { Injectable } from '@angular/core';

const KEY_PROD ="prod_update"; 

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public setProduct(product: Product): void {
    this.clear();
    localStorage.setItem(KEY_PROD, JSON.stringify(product));
  }

  public getProduct(): Product {
    return JSON.parse(localStorage.getItem(KEY_PROD)!);
  }

  public clear(): void {
    localStorage.removeItem(KEY_PROD);
  }

  constructor() { }
}
