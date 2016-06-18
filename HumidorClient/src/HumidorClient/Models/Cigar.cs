using System;
using System.ComponentModel.DataAnnotations;

namespace HumidorClient.Models
{
    public class Cigar
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public decimal Price { get; set; }
        public string Rating { get; set; }

        [Display(Name="Manufacturing Date")]
        [DataType(DataType.Date)]
        public DateTime ManufacturingDate { get; set; }
    }
}
