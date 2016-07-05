using System.Collections.Generic;
using System.Linq;
using HumidorClient.Models;
using HumidorClient.Services.CigarServices;
using HumidorClient.Services.Repositories;
using HumidorClient.Services.Repositories.Interfaces;
using HumidorClient.Services.UnitOfWorkService;
using Moq;
using Xunit;

namespace HumidorClientTests.ControllerServiceTests
{
    public class CigarServiceTests
    {
        private readonly ICigarService cigarService;
        private readonly Mock<IUnitOfWork> mockUnitOfWork;
        private Mock<ICigarRepository> mockCigarRepository;
        private Mock<ICountryRepository> mockCountryRepository;

        public CigarServiceTests()
        {
            mockCigarRepository = new Mock<ICigarRepository>();
            mockCigarRepository.Setup(x => x.GetFiltered(It.IsAny<string>(), It.IsAny<string>())).Returns(new List<Cigar>
            {
                new Cigar(), new Cigar()
            });

            mockCountryRepository = new Mock<ICountryRepository>();
            mockCountryRepository.Setup(x => x.GetAllDistinct()).Returns(new List<string>
            {
                "test1", "test2"
            });

            mockUnitOfWork = new Mock<IUnitOfWork>();
            mockUnitOfWork.SetupGet(x => x.CigarRepository).Returns(mockCigarRepository.Object);
            mockUnitOfWork.SetupGet(x => x.CountryRepository).Returns(mockCountryRepository.Object);
            
            cigarService = new CigarService(mockUnitOfWork.Object);
        }

        [Fact]
        public void GetCountriesShouldInvokeGetAllDistrinct()
        {
            cigarService.GetCountries();
            mockCountryRepository.Verify(x => x.GetAllDistinct());
        }

        [Fact]
        public async void GetCountriesShouldGetCountriesAsynchronically()
        {
            var result = await cigarService.GetCountries();
            Assert.Equal(2, result.Count);
        }

        [Fact]
        public void GetCigarsShouldInvokeGetFiltered()
        {
            cigarService.GetCigars(null,null);
            mockCigarRepository.Verify(x => x.GetFiltered(null,null));
        }

        [Fact]
        public async void GetCigarsShouldGetCigarsAsynchronically()
        {
            var result = await cigarService.GetCigars(null,null);
            Assert.Equal(2, result.Count);
        }

        [Fact]
        public void AddCigarShouldInvokeAdd()
        {
            cigarService.AddNewCigar(new Cigar());
            mockCigarRepository.Verify(x => x.Add(It.IsAny<Cigar>()));
        }

        [Fact]
        public async void AddCigarShouldInvokeContextSaveChanges()
        {
            await cigarService.AddNewCigar(new Cigar());
            mockUnitOfWork.Verify(x => x.SaveChangesAsync());
        }

        [Fact]
        public void EditCigarShouldInvokeUpdate()
        {
            cigarService.EditCigar(new Cigar());
            mockCigarRepository.Verify(x => x.Update(It.IsAny<Cigar>()));
        }

        [Fact]
        public async void EditCigarShouldInvokeContextSaveChanges()
        {
            await cigarService.EditCigar(new Cigar());
            mockUnitOfWork.Verify(x => x.SaveChangesAsync());
        }

        [Fact]
        public void RemoveCigarShouldInvokeDelete()
        {
            cigarService.RemoveCigar(new Cigar());
            mockCigarRepository.Verify(x => x.Delete(It.IsAny<Cigar>()));
        }

        [Fact]
        public async void RemoveCigarShouldInvokeContextSaveChanges()
        {
            await cigarService.RemoveCigar(new Cigar());
            mockUnitOfWork.Verify(x => x.SaveChangesAsync());
        }
    }
}
