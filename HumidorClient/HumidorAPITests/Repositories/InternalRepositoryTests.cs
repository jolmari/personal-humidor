using System.Collections.Generic;
using HumidorAPI.Data;
using HumidorAPI.Models;
using HumidorAPI.Repositories;
using HumidorAPI.Repositories.Interfaces;
using HumidorAPITests.Helpers;
using Microsoft.EntityFrameworkCore;
using Moq;
using Xunit;
using System.Linq;

namespace HumidorAPITests.RepositoryTests
{
    public class InternalRepositoryTests
    {
        private readonly Mock<IApplicationDbContext> mockContext;
        private readonly Mock<DbSet<Cigar>> mockDbSet;
        private readonly IRepository<Cigar> repository;
        private readonly IQueryable<Cigar> data;

        public InternalRepositoryTests()
        {
            data = new List<Cigar>
            {
                new Cigar {Id = 1},
                new Cigar {Id = 2},
                new Cigar {Id = 3}
            }.AsQueryable();

            mockDbSet = DbContextHelpers.CreateMockDbSet(data);
            mockContext = DbContextHelpers.CreateMockDbContext(mockDbSet.Object);
            repository = new Repository<Cigar>(mockContext.Object);
        }

        [Fact]
        public async void GetAllShouldReturnAllEntities()
        {
            var actual = await repository.GetAll().ToList();
            Assert.Equal(3, actual.Count);
        }

        [Fact]
        public async void GetByIdShouldReturnEntityWithCorrectIdTest()
        {
            var actual = await repository.GetById(1);
            Assert.Equal(1, actual.Id);
        }

        [Fact]
        public async void GetByIdShouldReturnNullWithIncorrectIdTest()
        {
            var actual = await repository.GetById(10);
            Assert.Null(actual);
        }

        [Fact]
        public async void ExistsShouldReturnTrueWithExistingItem()
        {
            var actual = await repository.Exists(1);
            Assert.True(actual);
        }

        [Fact]
        public async void ExistsShouldReturnFalseWithMissingItem()
        {
            var actual = await repository.Exists(10);
            Assert.False(actual);
        }

        [Fact]
        public void AddShouldAddNewEntityToDbSet()
        {
            repository.Add(new Cigar());
            mockDbSet.Verify(x => x.Add(It.IsAny<Cigar>()));
        }

        [Fact]
        public void UpdateShouldInvokeDbSetUpdate()
        {
            repository.Update(new Cigar {Id = 1});
            mockDbSet.Verify(x => x.Update(It.IsAny<Cigar>()));
        }

        [Fact]
        public void DeleteShouldInvokeDbSetDelete()
        {
            var expected = data.First(x => x.Id == 1);

            repository.Delete(1);

            mockDbSet.Verify(x => x.Remove(expected));
        }

        [Fact]
        public void DeleteNotExistingShouldNotThrowException()
        {
            repository.Delete(10);
            mockDbSet.Verify(x => x.Remove(null));
        }

        [Fact]
        public void DisposeShouldCallContextDispose()
        {
            repository.Dispose();
            mockContext.Verify(x => x.Dispose());
        }

        [Fact]
        public void DisposeShouldThrowIfContextNull()
        {
            var repo = new Repository<Cigar>(null);
            repo.Dispose();
        }
    }
}