using System.Collections.Generic;
using System.Threading.Tasks;
using HumidorClient.Data;
using HumidorClient.Models;

namespace HumidorClient.Services.CigarServices
{
    public class CigarService : ICigarService
    {
        private readonly ApplicationDbContext context;

        public CigarService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public Task<IEnumerable<Cigar>> GetCigars()
        {
            throw new System.NotImplementedException();
        }

        public async Task<int> AddNewCigar(Cigar cigar )
        {
            context.Add(cigar);
            return await context.SaveChangesAsync();
        }

        public void EditCigar(Cigar cigar)
        {
            throw new System.NotImplementedException();
        }

        public bool DeleteCigar(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}
