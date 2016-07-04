using System.Threading;
using System.Threading.Tasks;
using HumidorClient.Data;
using HumidorClient.Services.Repositories.Interfaces;

namespace HumidorClient.Services.UnitOfWorkService
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IApplicationDbContext context;

        public UnitOfWork(IApplicationDbContext context, ICigarRepository cigarRepository)
        {
            this.context = context;
            CigarRepository = cigarRepository;
        }

        public ICigarRepository CigarRepository { get; }

        public Task<int> SaveChanges()
        {
            return context.SaveChangesAsync(default(CancellationToken));
        }
    }
}
