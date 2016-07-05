using System.Collections.Generic;
using System.Threading.Tasks;
using HumidorClient.Models;

namespace HumidorClient.Services.CigarServices
{
    public interface ICigarService
    {
        Task<List<Cigar>> GetCigars(string searchString, string selectedCountry);
        Task<List<string>> GetCountries();
        Task<int> AddNewCigar(Cigar item);
        Task<int> EditCigar(Cigar item);
        Task<int> RemoveCigar(Cigar item);
    }
}
