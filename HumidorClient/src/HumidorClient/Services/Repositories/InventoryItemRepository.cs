using System.Collections.Generic;
using System.Linq;
using HumidorClient.Data;
using HumidorClient.Models;
using HumidorClient.Services.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HumidorClient.Services.Repositories
{
    public class InventoryItemRepository : Repository<InventoryItem>, IInventoryItemRepository
    {
        public InventoryItemRepository(IApplicationDbContext context) : base(context)
        {
        }

        //TODO: EF Core does not support lazy loading. Forced to use eager loading for now.
        public override IAsyncEnumerable<InventoryItem> GetAll()
        {
            return DbSet.Include(i => i.Cigar).ToAsyncEnumerable();
        }
    }
}
