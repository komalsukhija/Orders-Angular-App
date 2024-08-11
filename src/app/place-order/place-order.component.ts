import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule }  from '@angular/common';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [FormsModule, CommonModule, MatButtonModule],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})

export class PlaceOrderComponent {

  constructor(private orderService: OrderService) {
  }

  file: File | null = null;
  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit(form: any) {
    if (form.valid && this.file) {
      const formData = new FormData();
      formData.append('CName', form.value.CName);
      formData.append('Image', this.file,this.file.name);
      this.orderService.placeOrder(formData).subscribe(
        response => {
          console.log("response", response);
          alert("Order Placed Successfully!");
        },
        error => {
          console.log("error", error);
          alert("Error while placing order, please order again!");
          
        }
      )
    }
  }
}
