using System.Collections.Generic;
using System.Threading.Tasks;

namespace HumidorAPI.Services.CigarService
{
    public interface ICigarService
    {
        Task<List<Models.Cigar>> GetCigars(string searchString, string selectedCountry);
        //Task<List<string>> GetCountries();
        Task<Models.Cigar> GetCigarById(int id);
        Task<bool> CigarExists(int id);
        Task<int> AddNewCigar(Models.Cigar item);
        Task<int> EditCigar(Models.Cigar item);
        Task<int> RemoveCigar(Models.Cigar item);
    }
}
