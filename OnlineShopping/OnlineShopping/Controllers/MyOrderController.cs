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
        public IHttpActionResult PlaceOrder(MyOrder myorder)
        {
            var isDuplicateOrder = db.MyOrders.Where(w => w.OrderID == myorder.OrderID).FirstOrDefault();
            if (isDuplicateOrder == null)
            {
                if (myorder.OrderID == 0)
                {
                    MyOrder objcl = new MyOrder();
                    objcl.OrderID = myorder.OrderID;
                    objcl.UserID = myorder.UserID;
                    objcl.OrderTotal = myorder.OrderTotal ;
                    objcl.OrderDate = DateTime.Now;
                    db.MyOrders.Add(objcl);
                    db.SaveChanges();
                }
                return Ok("Success");
            }
            else
            {
                return Ok("Order Already Placed.");
            }
        }
    }
}
