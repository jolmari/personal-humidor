using System.Collections.Generic;
using HumidorClient.Models;
using HumidorClient.Services.Repositories;
using HumidorClient.Services.Repositories.Interfaces;
using HumidorClientTests.Helpers;
using System.Linq;
using HumidorClient.Data;
using Microsoft.EntityFrameworkCore;
using Moq;
using Xunit;

namespace HumidorClientTests.RepositoryTests
{
    public class CountryRepositoryTests
    {
        private readonly ICountryRepository countryRepository;
        private Mock<DbSet<Cigar>> mockDbSet;
        private Mock<ApplicationDbContext> mockContext;
        
        public CountryRepositoryTests()
        {
            var data = new List<Cigar>
            {
                new Cigar {Id = 1, Country = "Finland"},
                new Cigar {Id = 2, Country = "Germany"},
                new Cigar {Id = 3, Country = "Finland"}
            }.AsQueryable();

            mockDbSet = DbContextHelpers.CreateMockDbSet(data);
            mockContext = DbContextHelpers.CreateMockDbContext(mockDbSet.Object);
            countryRepository = new CountryRepository(mockContext.Object);
        }

        [Fact]
        public void GetAllDistinctShouldReturnOnlyDistinctCountries()
        {
            var results = countryRepository.GetAllDistinct();
            Assert.Equal(2, results.Count());
        }
    }
}
