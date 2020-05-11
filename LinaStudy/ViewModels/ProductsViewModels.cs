using LinaStudy.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LinaStudy.ViewModels
{
    public class ManProductModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }

    }

    public class AddProductModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string Sex { get; set; }
        public string Type { get; set; }
        public string Price { get; set; }

    }

    public class InfoAddProductModel
    {
        public List<Sex> Sexes { get; set; }
        public List<DAL.Entities.Type> Types { get; set; }

    }
}
