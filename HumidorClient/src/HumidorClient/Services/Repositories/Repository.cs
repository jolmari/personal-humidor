using System;
using System.Linq;
using System.Threading.Tasks;
using HumidorClient.Data;
using HumidorClient.Models;
using HumidorClient.Services.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HumidorClient.Services.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class, IEntity
    {
        private IApplicationDbContext context;
        
        public Repository(IApplicationDbContext context)
        {
            this.context = context;
        }

        private DbSet<TEntity> DbSet => context.Set<TEntity>();

        protected IQueryable<TEntity> AsQueryable()
        {
            return DbSet.AsQueryable();
        }

        public async Task<TEntity> GetById(int id)
        {
            return await DbSet.FirstOrDefaultAsync(i => i.Id == id);
        }

        public async Task<bool> Exists(int id)
        {
            return await DbSet.AnyAsync(i => i.Id == id);
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