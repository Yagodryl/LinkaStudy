using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LinaStudy.DAL.Entities
{
    [Table("tblProducts")]
    public class Product
    {
        [Key]
        public int Id { get; set; }
        [StringLength(255)]
        public string Name { get; set; }
        [StringLength(2000)]
        public string Description { get; set; }
        public decimal Price { get; set; }
       
        public ICollection<Image> Images { get; set; }

        [ForeignKey("Type")]
        public int TypeId { get; set; }
        public Type Type { get; set; }

        [ForeignKey("Sex")]
        public int SexId { get; set; }
        public Sex Sex { get; set; }




    }
}
