using System.Collections.Generic;
using HumidorAPI.Models;

namespace HumidorAPI.Repositories.Interfaces
{
    public interface ICigarRepository : IRepository<Cigar>
    {
        IAsyncEnumerable<Cigar> GetFiltered(string nameFilter = null, string countryFilter = null);
    }
}
