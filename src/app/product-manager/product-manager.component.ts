import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyProduct } from 'src/model/myProducts';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent{

  allProducts:any=[];
  searchKey:string=""
  constructor(private api:ApiService){}
  ngOnInit(): void{
    this.getAllProducts();
  }
  getAllProducts(){
    this.api.getAllProducts().subscribe((data:MyProduct)=>{
      console.log(data);
      this.allProducts=data;
      console.log(this.allProducts);
    })
  }
  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value;
    console.log(this.searchKey);
    
  }
}
