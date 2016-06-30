using System;
using System.Linq;
using HumidorClient.Models;
using HumidorClient.Services.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HumidorClient.Services.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class, IEntity
    {
        private DbContext context;
        
        public Repository(DbContext context)
        {
            this.context = context;
        }

        private DbSet<TEntity> DbSet => context.Set<TEntity>();

        protected IQueryable<TEntity> AsQueryable()
        {
            return DbSet.AsQueryable();
        }

        public TEntity GetById(int id)
        {
            return DbSet.FirstOrDefault(i => i.Id == id);
        }

        public void Add(TEntity item)
        {
            DbSet.Add(item);
        }

        public void Update(TEntity item)
        {
            DbSet.Update(item);
        }

        public void Delete(TEntity item)
        {
            DbSet.Remove(item);
        }
        
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (context != null)
                {
                    context.Dispose();
                    context = null;
                }
            }
        }
    }
}