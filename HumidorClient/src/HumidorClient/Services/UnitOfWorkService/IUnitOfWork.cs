using System.Threading.Tasks;

namespace HumidorClient.Services.UnitOfWorkService
{
    public interface IUnitOfWork
    {
        Task<int> SaveChanges();
    }
}
