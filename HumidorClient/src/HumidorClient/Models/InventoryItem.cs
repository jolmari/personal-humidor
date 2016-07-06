using System;
using System.ComponentModel.DataAnnotations;

namespace HumidorClient.Models
{
    public class InventoryItem : IEntity
    {
        public int Id { get; set; }
        public int Quantity { get; set; }

        [Display(Name = "Date of Purchase")]
        [DataType(DataType.Date)]
        public DateTime PurchaseDate { get; set; }

        public virtual Cigar Cigar { get; set; }

    }
}
