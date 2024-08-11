import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-get-order-status',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './get-order-status.component.html',
  styleUrl: './get-order-status.component.css'
})
export class GetOrderStatusComponent {
error: string = '';
//create a model and assign it here
order: any;
isLoading: boolean = false;
id: string = '';

constructor(private orderService: OrderService) {
}

onSubmit(form: any){
  this.isLoading = true;
  this.id = form.value.id;
  this.orderService.getOrderStatus(this.id).subscribe(
    data => {
      this.order = data;
      this.isLoading = false;
    },
    error => {
      this.error = 'Error fetching order';
      this.isLoading = false;
    }
  );

}

}
