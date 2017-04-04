using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HumidorClient.Models.Interfaces;

namespace HumidorClient.Repositories.Interfaces
{
    public interface IRepository<TEntity> : IDisposable where TEntity : IEntity
    {
        IAsyncEnumerable<TEntity> GetAll();
        Task<TEntity> GetById(int id);
        Task<bool> Exists(int id);
        void Add(TEntity item);
        void Update(TEntity item);
        void Delete(int id);
    }
}
