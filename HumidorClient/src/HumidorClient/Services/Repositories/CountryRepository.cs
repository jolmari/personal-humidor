using System.Collections.Generic;
using HumidorClient.Data;
using HumidorClient.Models;
using HumidorClient.Services.Repositories.Interfaces;
using System.Linq;

namespace HumidorClient.Services.Repositories
{
    public class CountryRepository : Repository<Cigar>, ICountryRepository
    {
        public CountryRepository(IApplicationDbContext context) : base(context)
        {
        }
        
        public IAsyncEnumerable<string> GetAllDistinct()
        {
            var source = AsQueryable().Select(c => c.Country).Distinct();
            return source.ToAsyncEnumerable();
        }
    }
}
