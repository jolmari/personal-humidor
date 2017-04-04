using System.Collections.Generic;
using System.Linq;
using HumidorClient.Data;
using HumidorClientTests.Providers;
using Microsoft.EntityFrameworkCore;
using Moq;

namespace HumidorClientTests.Helpers
{
    public static class DbContextHelpers
    {
        public static Mock<DbSet<TEntity>> CreateMockDbSet<TEntity>(IQueryable<TEntity> data) where TEntity : class
        {
            var mockDbSet = new Mock<DbSet<TEntity>>();

            mockDbSet.As<IAsyncEnumerable<TEntity>>()
                .Setup(m => m.GetEnumerator())
                .Returns(new TestAsyncEnumerator<TEntity>(data.GetEnumerator()));

            mockDbSet.As<IQueryable<TEntity>>()
                .Setup(m => m.Provider)
                .Returns(new TestAsyncQueryProvider<TEntity>(data.Provider));

            mockDbSet.As<IQueryable<TEntity>>().Setup(x => x.Expression).Returns(data.Expression);
            mockDbSet.As<IQueryable<TEntity>>().Setup(x => x.ElementType).Returns(data.ElementType);
            mockDbSet.As<IQueryable<TEntity>>().Setup(x => x.GetEnumerator()).Returns(data.GetEnumerator());
            return mockDbSet;
        }

        public static Mock<IApplicationDbContext> CreateMockDbContext<TEntity>(DbSet<TEntity> dbSet) where TEntity : class
        {
            var mock = new Mock<IApplicationDbContext>();
            mock.Setup(x => x.Set<TEntity>()).Returns(dbSet);
            return mock;
        }
    }
}
