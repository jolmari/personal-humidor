using HumidorClient.Data;
using HumidorClient.Models;
using HumidorClient.Services.Repositories.Interfaces;

namespace HumidorClient.Services.Repositories
{
    public class InventoryItemRepository : Repository<InventoryItem>, IInventoryItemRepository
    {
        public InventoryItemRepository(IApplicationDbContext context) : base(context)
        {
        }
    }
}
