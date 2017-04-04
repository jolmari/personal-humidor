using System.Collections.Generic;
using System.Threading.Tasks;
using HumidorClient.Models;

namespace HumidorClient.Services.CigarService
{
    public interface ICigarService
    {
        IAsyncEnumerable<Cigar> GetAllCigars();
        IAsyncEnumerable<Cigar> SearchCigarsByName(string term);
        Task<Cigar> GetCigarById(int id);
        Task<bool> CigarExists(int id);
        Task<int> AddNewCigar(Cigar item);
        Task<int> EditCigar(Cigar item);
        Task<int> RemoveCigar(int id);
    }
}
