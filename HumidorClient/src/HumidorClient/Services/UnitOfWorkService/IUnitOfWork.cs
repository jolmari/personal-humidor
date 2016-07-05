using System.Threading.Tasks;
using HumidorClient.Services.Repositories.Interfaces;

namespace HumidorClient.Services.UnitOfWorkService
{
    public interface IUnitOfWork
    {
        ICigarRepository CigarRepository { get; }
        ICountryRepository CountryRepository { get; }
        Task<int> SaveChangesAsync();

    }
}