using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LinaStudy.DAL;
using LinaStudy.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LinaStudy.Controllers
{
    [Produces("application/json")]
    [Route("api/Products")]
    public class ProductsController : ControllerBase
    {
        private readonly EFDbContext _context;

        public ProductsController(EFDbContext context)
        {
            _context = context;
        }

        [HttpGet ("get-man-producs")]
        public IActionResult GetManProducts()
        {
            var model = new List<ManProductModel>();
            var products = _context.Products
                .Include(x => x.Images)
                .Select(x=>x);

            foreach(var item in products)
            {
                model.Add(new ManProductModel
                {
                    Id = item.Id,
                    Title = item.Name,
                    Description = item.Description,
                    Image = (item.Images.ToArray())[0].ImageUrl
                }) ;
            }
            return Ok(model);
        }
    }
}