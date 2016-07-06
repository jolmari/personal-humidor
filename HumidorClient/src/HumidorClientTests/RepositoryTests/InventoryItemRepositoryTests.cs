using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HumidorClient.Data;
using HumidorClient.Models;
using HumidorClient.Services.Repositories;
using HumidorClient.Services.Repositories.Interfaces;
using HumidorClientTests.Helpers;
using Moq;
using Xunit;

namespace HumidorClientTests.RepositoryTests
{
    public class InventoryItemRepositoryTests
    {
        private readonly IInventoryItemRepository repository;

        public InventoryItemRepositoryTests()
        {
            var data = new List<InventoryItem>
            {
                new InventoryItem {Id = 1},
                new InventoryItem {Id = 2},
                new InventoryItem {Id = 3}
            }.AsQueryable();

            var mockDbSet = DbContextHelpers.CreateMockDbSet(data);
            var mockContext = DbContextHelpers.CreateMockDbContext(mockDbSet.Object);
            repository = new InventoryItemRepository(mockContext.Object);
        }

        [Fact]
        public async void GetAllShouldReturnAllEntitiess()
        {
            var actual = await repository.GetAll().ToList();
            Assert.Equal(3, actual.Count);
        }

        [Fact(Skip="The include method is not part of the IQueryableExtensions. Retry again when EF is released.")]
        public async void GetAllResultsShouldIncludeCigarEntities()
        {
            var actual = await repository.GetAll().ToList();
            Assert.NotNull(actual.First().Cigar);
        }
    }
}
