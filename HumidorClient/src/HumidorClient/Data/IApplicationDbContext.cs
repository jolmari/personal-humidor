using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace HumidorClient.Data
{
    public interface IApplicationDbContext
    {
        void Dispose();
        DbSet<TEntity> Set<TEntity>() where TEntity : class;
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
