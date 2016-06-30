using System;
using System.ComponentModel.DataAnnotations;

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

        [RegularExpression(@"^['*']+$", ErrorMessage = "Please give rating as 1-5 stars (*).")]
        [StringLength(5)]
        [Display(Prompt = "*-*****")]
        public string Rating { get; set; }

        [Display(Name = "Manufacturing Date")]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [DataType(DataType.Date)]
        public DateTime ManufacturingDate { get; set; }
    }
}