using System.Collections.Generic;
using System.Linq;
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

        public async Task<List<InventoryItem>> GetInventory()
        {
            return await unitOfWork.InventoryItemRepository.GetAll().ToList();
        }
    }
}
