using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LinaStudy.DAL;
using LinaStudy.DAL.Entities;
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
            Random rnd = new Random();

            int a = rnd.Next(100);
            if (a <= 66)
            {

            return Ok(model);
            }
            else
            {
                return BadRequest("!!!Error!!!");

            }
        }

        [HttpPost("add-product")]
        public IActionResult AddProduct([FromBody] AddProductModel model)
        {

            var images = new List<Image>();
            images.Add(new Image { ImageUrl = model.Image });

            var product = new DAL.Entities.Product
            {
                Name = model.Name,
                Price = decimal.Parse(model.Price),
                Description = model.Description,
                SexId = int.Parse(model.Sex),
                TypeId = int.Parse(model.Type),
                Images = images
            };
            _context.Products.Add(product);
            _context.SaveChanges();



            return Ok();
        }

        [HttpGet("info-add-product")]
        public IActionResult InfoAddProduct()
        {
            InfoAddProductModel model = new InfoAddProductModel();
            model.Types = _context.Types.Select(x => x).ToList();
            model.Sexes = _context.Sexes.Select(x => x).ToList(); 

            return Ok(model);
        }
    }
}