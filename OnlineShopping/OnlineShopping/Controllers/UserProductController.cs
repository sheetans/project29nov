using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using OnlineShopping.Models;


namespace OnlineShopping.Controllers
{
    public class UserProductController : ApiController
    {
        private DbonlineshoppingEntities1 db = new DbonlineshoppingEntities1();

        [HttpGet]
        public IHttpActionResult GetProducts()
        {
            var products = db.Products.Select(s => new ProductModel()
            {
                Brand = s.Brand,
                ProductDescription = s.ProductDescription,
                ProductCode = s.ProductCode,
                ProductName = s.ProductName,
                CreatedDate = s.CreatedDate,
                Quantity = s.Quantity,
                ProductID = s.ProductID,
                ProductPrice = s.ProductPrice,
                CategoryName = s.Category.CategoryName,
                ModifiedBy = s.ModifiedBy,
                CategoryID = s.CategoryID,
                ModifiedDate = s.ModifiedDate,
                InStock = s.InStock
            }).ToList();
            return Ok(products);
        }

    }
}
