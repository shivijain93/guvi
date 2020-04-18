import { Injectable } from '@angular/core';
import{ HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  postProduct(data):Observable<any>{
   return this.http.post('http://localhost:3000/product',data)
  }
  listProduct():Observable<any>{
    return this.http.get('http://localhost:3000/product')
   }
   updateProduct(data):Observable<any>{
    return this.http.put('http://localhost:3000/product',data)
   }
   deleteProduct(data):Observable<any>{
    return this.http.delete('http://localhost:3000/product',data)
   }
}
