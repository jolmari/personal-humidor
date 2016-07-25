using System.Collections.Generic;
using System.Threading.Tasks;
using HumidorAPI.Models;

namespace HumidorAPI.Services.CigarService
{
    public interface ICigarService
    {
        Task<List<Cigar>> GetCigars(string searchString, string selectedCountry);
        //Task<List<string>> GetCountries();
        Task<Cigar> GetCigarById(int id);
        Task<bool> CigarExists(int id);
        Task<int> AddNewCigar(Cigar item);
        Task<int> EditCigar(Cigar item);
        Task<int> RemoveCigar(Cigar item);
    }
}
