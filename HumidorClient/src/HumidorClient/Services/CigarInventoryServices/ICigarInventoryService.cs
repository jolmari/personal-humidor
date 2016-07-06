using System.Collections.Generic;
using System.Threading.Tasks;
using HumidorClient.Models;

namespace HumidorClient.Services.CigarInventoryServices
{
    public interface ICigarInventoryService
    {
        Task<List<Cigar>> GetInventory();
    }
}
