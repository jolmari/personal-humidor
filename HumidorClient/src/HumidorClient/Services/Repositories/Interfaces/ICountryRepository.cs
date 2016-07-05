using System.Collections.Generic;
using HumidorClient.Models;

namespace HumidorClient.Services.Repositories.Interfaces
{
    public interface ICountryRepository : IRepository<Cigar>
    {
        IEnumerable<string> GetAllDistinct();
    }
}
