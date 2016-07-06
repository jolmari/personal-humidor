using System.Threading;
using System.Threading.Tasks;
using HumidorClient.Data;
using HumidorClient.Services.Repositories.Interfaces;

namespace HumidorClient.Services.UnitOfWorkService
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IApplicationDbContext context;

        public UnitOfWork(IApplicationDbContext context,
            ICigarRepository cigarRepository,
            ICountryRepository countryRepository,
            IInventoryItemRepository inventoryItemRepository)
        {
            this.context = context;
            InventoryItemRepository = inventoryItemRepository;
            CigarRepository = cigarRepository;
            CountryRepository = countryRepository;
        }

        public virtual ICigarRepository CigarRepository { get; }
        public virtual ICountryRepository CountryRepository { get; }
        public virtual IInventoryItemRepository InventoryItemRepository { get; }

        public Task<int> SaveChangesAsync()
        {
            return context.SaveChangesAsync(default(CancellationToken));
        }
    }
}