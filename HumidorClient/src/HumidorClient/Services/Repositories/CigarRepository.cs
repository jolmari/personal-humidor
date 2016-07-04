using HumidorClient.Data;
using HumidorClient.Models;
using HumidorClient.Services.Repositories.Interfaces;

namespace HumidorClient.Services.Repositories
{
    public class CigarRepository : Repository<Cigar>, ICigarRepository
    {
        public CigarRepository(IApplicationDbContext context) : base(context)
        {
        }
    }
}
