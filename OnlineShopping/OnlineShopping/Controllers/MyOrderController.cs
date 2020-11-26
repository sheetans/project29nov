using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using OnlineShopping.Models;

namespace OnlineShopping.Controllers
{

    public class MyOrderController : ApiController
    {
        DbonlineshoppingEntities1 db = new DbonlineshoppingEntities1();

        [HttpPost]
        public IHttpActionResult PlaceOrder(MyOrderModel myOrderModel)
        {
            if (myOrderModel.OrderID == 0)
            {
                MyOrder objcl = new MyOrder();
                objcl.OrderID = myOrderModel.OrderID;
                objcl.UserID = myOrderModel.UserID;
                objcl.OrderTotal = myOrderModel.OrderTotal;
                objcl.OrderDate = DateTime.Now;
                db.MyOrders.Add(objcl);
                db.SaveChanges();

                int id = objcl.OrderID;
                foreach (var item in myOrderModel.CartModel)
                {
                    OrderDetail orderDetail = new OrderDetail();
                    orderDetail.OrderDate = DateTime.Now;
                    orderDetail.TotalPrice = (int)item.TotalPrice;
                    orderDetail.Quantity = item.Quantity;
                    orderDetail.OrderID = id;
                    orderDetail.ProductID = item.ProductID;
                    db.OrderDetails.Add(orderDetail);
                    db.SaveChanges();
                    var cart = db.Carts.Where(w => w.CartID == item.CartID).FirstOrDefault();
                    if (cart != null)
                    {
                        db.Carts.Remove(cart);
                        db.SaveChanges();
                        return Ok("Success");
                    }
                }

            }
            return Ok("Success");
        }
    }
}
