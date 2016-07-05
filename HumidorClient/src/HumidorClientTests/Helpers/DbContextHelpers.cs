using System.Linq;
using HumidorClient.Data;
using Microsoft.EntityFrameworkCore;
using Moq;

namespace HumidorClientTests.Helpers
{
    public static class DbContextHelpers
    {
        public static Mock<DbSet<TEntity>> CreateMockDbSet<TEntity>(IQueryable<TEntity> data) where TEntity : class
        {
            var mockDbSet = new Mock<DbSet<TEntity>>();
            mockDbSet.As<IQueryable<TEntity>>().Setup(x => x.Provider).Returns(data.Provider);
            mockDbSet.As<IQueryable<TEntity>>().Setup(x => x.Expression).Returns(data.Expression);
            mockDbSet.As<IQueryable<TEntity>>().Setup(x => x.ElementType).Returns(data.ElementType);
            mockDbSet.As<IQueryable<TEntity>>().Setup(x => x.GetEnumerator()).Returns(data.GetEnumerator());
            return mockDbSet;
        }

        public static Mock<ApplicationDbContext> CreateMockDbContext<TEntity>(DbSet<TEntity> dbSet) where TEntity : class
        {
            var mock = new Mock<ApplicationDbContext>(new DbContextOptions<ApplicationDbContext>());
            mock.Setup(x => x.Set<TEntity>()).Returns(dbSet);
            return mock;
        }
    }
}
