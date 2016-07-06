using System;
using System.Threading.Tasks;
using HumidorClient.Models;

namespace HumidorClient.Services.Repositories.Interfaces
{
    public interface IRepository<TEntity> : IDisposable where TEntity : IEntity
    {
        Task<TEntity> GetById(int id);
        Task<bool> Exists(int id);
        void Add(TEntity item);
        void Update(TEntity item);
        void Delete(TEntity item);
    }
}
