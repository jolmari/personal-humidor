using System.Collections.Generic;
using HumidorClient.Models;

namespace HumidorClient.Services.Repositories.Interfaces
{
    public interface ICigarRepository : IRepository<Cigar>
    {
        IEnumerable<Cigar> GetFiltered(string nameFilter = null, string countryFilter = null);
    }
}
