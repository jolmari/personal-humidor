using System;

namespace HumidorClient.Models
{
    public class InventoryItem : IEntity
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public DateTime PurchaseDate { get; set; }
        public virtual Cigar Cigar { get; set; }

    }
}
