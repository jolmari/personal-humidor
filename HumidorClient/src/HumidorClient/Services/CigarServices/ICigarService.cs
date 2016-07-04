using System.Collections.Generic;
using System.Threading.Tasks;
using HumidorClient.Models;

namespace HumidorClient.Services.CigarServices
{
    public interface ICigarService
    {
        Task<IEnumerable<Cigar>> GetCigars();
        Task<int> AddNewCigar(Cigar cigar);
        void EditCigar(Cigar cigar);
        bool DeleteCigar(int id);
    }
}
