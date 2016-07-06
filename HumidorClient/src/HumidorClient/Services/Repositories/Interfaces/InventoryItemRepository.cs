using HumidorClient.Data;
using HumidorClient.Models;

namespace HumidorClient.Services.Repositories.Interfaces
{
    public class InventoryItemRepository : Repository<InventoryItem>, IInventoryItemRepository
    {
        public InventoryItemRepository(IApplicationDbContext context) : base(context)
        {
        }
    }
}
