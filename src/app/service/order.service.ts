import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = '';
  constructor(private http: HttpClient) {
  }

  getOrderStatus(id: string): Observable<any> {
    //TO DO call the actual API to get the order status by id
    let params = new HttpParams().set('id',id)
    return this.http.get(this.url, {params});
  }

  placeOrder(formData: FormData): Observable<any>{
    //TO DO call the actual API to save the order details
    return this.http.post(this.url, formData);
  }

}
