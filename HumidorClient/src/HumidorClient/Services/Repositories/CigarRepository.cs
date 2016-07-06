using System;
using System.Collections.Generic;
using HumidorClient.Data;
using HumidorClient.Models;
using HumidorClient.Services.Repositories.Interfaces;
using System.Linq;

namespace HumidorClient.Services.Repositories
{
    public class CigarRepository : Repository<Cigar>, ICigarRepository
    {
        public CigarRepository(IApplicationDbContext context) : base(context)
        {
        }

        public IAsyncEnumerable<Cigar> GetFiltered(string nameFilter, string countryFilter)
        {
            var cigars = AsQueryable();

            if (!string.IsNullOrEmpty(countryFilter))
            {
                cigars = cigars.Where(c => c.Country.Contains(countryFilter));
            }

            if (!string.IsNullOrEmpty(nameFilter))
            {
                cigars = cigars.Where(c => c.Name.Contains(nameFilter));
            }

            return cigars.ToAsyncEnumerable();
        }
    }
}
