using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace HumidorClient.Models.CountryViewModel
{
    public class CountryViewModel
    {
        public List<Cigar> Cigars { get; set; }
        public SelectList Countries { get; set; }
        public string SelectedCountry { get; set; }
    }
}
