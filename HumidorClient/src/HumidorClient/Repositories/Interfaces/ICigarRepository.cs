using System.Collections.Generic;
using HumidorClient.Models;

namespace HumidorClient.Repositories.Interfaces
{
    public interface ICigarRepository : IRepository<Cigar>
    {
        IAsyncEnumerable<Cigar> GetFiltered(string nameFilter = null, string countryFilter = null);
    }
}
