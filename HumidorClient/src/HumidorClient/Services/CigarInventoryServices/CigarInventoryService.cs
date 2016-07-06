using System.Collections.Generic;
using System.Threading.Tasks;
using HumidorClient.Models;
using HumidorClient.Services.UnitOfWorkService;

namespace HumidorClient.Services.CigarInventoryServices
{
    public class CigarInventoryService : ICigarInventoryService
    {
        private readonly IUnitOfWork unitOfWork;

        public CigarInventoryService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public Task<List<Cigar>> GetInventory()
        {
            throw new System.NotImplementedException();
        }
    }
}
