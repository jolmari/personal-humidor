using System;
using System.ComponentModel.DataAnnotations;
using HumidorClient.Models.Interfaces;

namespace HumidorClient.Models
{
    // TODO: Country and rating should not be insertable. Replace with pre-generated datasets from which to pick the wanted option.
    public class Cigar : IEntity
    {
        public int Id { get; set; }

        [Required]
        [StringLength(60)]
        public string Name { get; set; }

        [Required]
        [RegularExpression(@"^[A-Z]+[a-zA-Z'-'\s]*$", ErrorMessage = "Please give country name in letter format.")]
        public string Country { get; set; }

        [DataType(DataType.Currency)]
        public decimal Price { get; set; }

        [Range(1,5)]
        public int? Rating { get; set; }

        [DataType(DataType.Date)]
        public DateTime ManufacturingDate { get; set; }
    }
}