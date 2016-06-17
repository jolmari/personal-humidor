using System;

namespace HumidorClient.Models
{
    public class Cigar
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime ManufacturingDate { get; set; }
        public string Country { get; set; }
        public decimal Price { get; set; }
    }
}
