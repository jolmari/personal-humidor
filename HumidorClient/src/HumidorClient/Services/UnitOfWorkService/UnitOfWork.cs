using System.Threading;
using System.Threading.Tasks;
using HumidorClient.Data;
using HumidorClient.Services.Repositories.Interfaces;

namespace HumidorClient.Services.UnitOfWorkService
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IApplicationDbContext context;

        public UnitOfWork(IApplicationDbContext context, ICigarRepository cigarRepository, ICountryRepository countryRepository)
        {
            this.context = context;
            CigarRepository = cigarRepository;
            CountryRepository = countryRepository;
        }

        public ICigarRepository CigarRepository { get; }
        public ICountryRepository CountryRepository { get; }

        public Task<int> SaveChangesAsync()
        {
            return context.SaveChangesAsync(default(CancellationToken));
        }
    }
}
