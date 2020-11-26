import { Component, OnInit } from '@angular/core';
import { MyOrderModel } from '../models/MyOrder.model';
import { Orderservice } from '../services/order.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {

  myorder: MyOrderModel[];
  constructor(private orderservice: Orderservice) { }

  ngOnInit(model) {

  this.orderservice.PlaceOrder(model).subscribe((response: any) => {
    if (response == 'Success') {
      alert('Order Placed Succesfully');
    }
    else {
      this.error = response;
    }
  });
  }
}
