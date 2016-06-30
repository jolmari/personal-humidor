using System;
using HumidorClient.Models;

namespace HumidorClient.Services.Repositories.Interfaces
{
    public interface IRepository<TEntity> : IDisposable where TEntity : IEntity
    {
        TEntity GetById(int id);
        void Add(TEntity item);
        void Update(TEntity item);
        void Delete(TEntity item);
    }
}
