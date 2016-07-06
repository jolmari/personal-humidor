using System.Collections.Generic;
using System.Linq;
using HumidorClient.Data;
using HumidorClient.Models;
using HumidorClient.Services.Repositories;
using HumidorClient.Services.Repositories.Interfaces;
using HumidorClientTests.Helpers;
using Microsoft.EntityFrameworkCore;
using Moq;
using Xunit;

namespace HumidorClientTests.RepositoryTests
{
    public class CigarRepositoryTests
    {
        private readonly ICigarRepository cigarRepository;
        private readonly Mock<ApplicationDbContext> mockContext;
        private readonly Mock<DbSet<Cigar>> mockDbSet;

        public CigarRepositoryTests()
        {
            var data = new List<Cigar>
            {
                new Cigar {Id = 1, Name = "Test1", Country = "Finland"},
                new Cigar {Id = 2, Name = "Test2", Country = "Germany"},
                new Cigar {Id = 3, Name = "Temp4", Country = "France"},
                new Cigar {Id = 4, Name = "Temp3", Country = "Finland"}
            }.AsQueryable();

            mockDbSet = DbContextHelpers.CreateMockDbSet(data);
            mockContext = DbContextHelpers.CreateMockDbContext(mockDbSet.Object);
            cigarRepository = new CigarRepository(mockContext.Object);
        }

        [Theory]
        [InlineData("Test", 2)]
        [InlineData("", 4)]
        [InlineData("NotAny", 0)]
        public async void GetFilteredWithNameFilterShouldReturnFilteredCigars(string nameFilter, int expectedResults)
        {
            var results = cigarRepository.GetFiltered(nameFilter);
            Assert.Equal(expectedResults, await results.Count());
        }

        [Theory]
        [InlineData("Finland", 2)]
        [InlineData("", 4)]
        [InlineData("NotAny", 0)]
        public async void GetFilteredWithCountryFilterShouldReturnFilteredCigars(string countryFilter, int expectedResults)
        {
            var results = cigarRepository.GetFiltered(countryFilter: countryFilter);
            Assert.Equal(expectedResults, await results.Count());
        }

        [Theory]
        [InlineData("Temp", "", 2)]
        [InlineData("","Finland", 2)]
        [InlineData("Temp4","France", 1)]
        [InlineData("NotAny", "NotAny", 0)]
        public async void GetFilteredWithNameAndCountryFiltersShouldReturnFilteredCigars(string nameFilter,
            string countryFilter, int expectedResults)
        {
            var results = cigarRepository.GetFiltered(nameFilter, countryFilter);
            Assert.Equal(expectedResults, await results.Count());
        }
    }
}