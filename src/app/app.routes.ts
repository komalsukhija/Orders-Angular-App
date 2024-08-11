import { Routes } from '@angular/router';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { GetOrderStatusComponent } from './get-order-status/get-order-status.component';

export const routes: Routes = [
    { path: '', redirectTo: 'place-order', pathMatch: 'full' },
    {path: 'place-order', component: PlaceOrderComponent},
    {path: 'get-order-status', component: GetOrderStatusComponent}
];
