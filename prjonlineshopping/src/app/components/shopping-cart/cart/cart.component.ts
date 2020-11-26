import { Component, OnInit } from '@angular/core';
import { productservice } from '../../../services/productservice';
import { CartModel, UpdateCartModel } from '../../../models/Cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartTotal = 0;
  cartModel: CartModel[] = new Array<CartModel>();
  updateCartModel: UpdateCartModel = new UpdateCartModel();
  deletecartid: number;
  constructor(private prodservice: productservice) { }

  ngOnInit(): void {
    let userId = Number(sessionStorage.getItem('userId'));
    this.prodservice.getCartProduct(userId).subscribe((data: any) => {
      this.cartModel = data;
    });
  }

  onAddQuantity(cartItem) {
    cartItem.Quantity = cartItem.Quantity + 1;
    cartItem.TotalPrice = cartItem.Quantity * cartItem.ProductPrice;
    this.updateCartModel.ProductID = cartItem.ProductID;
    this.updateCartModel.UserID = Number(sessionStorage.getItem('userId'));
    this.updateCartModel.Quantity = cartItem.Quantity;
    this.updateCartModel.TotalPrice = cartItem.TotalPrice;
    this.prodservice.UpdateCart(this.updateCartModel).subscribe((response: any) => {
      if (response == "Success") {
        alert("Cart updated Successfully");
        this.cartTotal = 0;
        this.cartModel.forEach(item => {
          this.cartTotal += (item.Quantity * item.TotalPrice);

        });
      }

      else {
        alert(response);
      }
    });

  }

  onRemoveQuantity(cartItem) {
    if (cartItem.Quantity > 1) {
      cartItem.Quantity = cartItem.Quantity - 1;
      cartItem.TotalPrice = cartItem.Quantity * cartItem.ProductPrice;
      this.updateCartModel.ProductID = cartItem.ProductID;
      this.updateCartModel.UserID = Number(sessionStorage.getItem('userId'));
      this.updateCartModel.Quantity = cartItem.Quantity;
      this.updateCartModel.TotalPrice = cartItem.TotalPrice;
      this.prodservice.UpdateCart(this.updateCartModel).subscribe((response: any) => {
        if (response == "Success") {
          alert("Cart updated Successfully");
        }
        else {
          alert(response);
        }
      });
    }
  }
  handleRemoveFromCart(id) {
    this.prodservice.RemovefromCart(this.deletecartid = id).subscribe((response: any) => {
      if (response == 'Success') {
        alert('Product successfully removed from Cart');
      }
    });
  }
}
