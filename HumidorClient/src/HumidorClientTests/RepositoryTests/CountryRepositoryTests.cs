using System.Collections.Generic;
using HumidorClient.Models;
using HumidorClient.Services.Repositories;
using HumidorClient.Services.Repositories.Interfaces;
using HumidorClientTests.Helpers;
using System.Linq;
using Xunit;

namespace HumidorClientTests.RepositoryTests
{
    public class CountryRepositoryTests
    {
        private readonly ICountryRepository countryRepository;

        public CountryRepositoryTests()
        {
            var data = new List<Cigar>
            {
                new Cigar {Id = 1, Country = "Finland"},
                new Cigar {Id = 2, Country = "Germany"},
                new Cigar {Id = 3, Country = "Finland"}
            }.AsQueryable();

            var mockDbSet = DbContextHelpers.CreateMockDbSet(data);
            var mockContext = DbContextHelpers.CreateMockDbContext(mockDbSet.Object);
            countryRepository = new CountryRepository(mockContext.Object);
        }

        [Fact]
        public async void GetAllDistinctShouldReturnOnlyDistinctCountries()
        {
            var results = countryRepository.GetAllDistinct();
            Assert.Equal(2, await results.Count());
        }
    }
}
