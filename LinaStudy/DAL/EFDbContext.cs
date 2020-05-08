using LinaStudy.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Type = LinaStudy.DAL.Entities.Type;

namespace LinaStudy.DAL
{
    public class EFDbContext : DbContext
    {
        public EFDbContext(DbContextOptions<EFDbContext> options) : base(options)
        {

        }

        public DbSet<Type> Types { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<Sex> Sexes { get; set; }
        public DbSet<Product> Products { get; set; }
    }
}
