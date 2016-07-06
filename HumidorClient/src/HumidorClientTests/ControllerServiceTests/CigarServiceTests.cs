using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HumidorClient.Models;
using HumidorClient.Services.CigarServices;
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
        private readonly Mock<ICigarRepository> mockCigarRepository;
        private readonly Mock<ICountryRepository> mockCountryRepository;

        public CigarServiceTests()
        {
            mockCigarRepository = new Mock<ICigarRepository>();
            mockCigarRepository.Setup(x => x.GetFiltered(It.IsAny<string>(), It.IsAny<string>()))
                .Returns(new List<Cigar>
            {
                new Cigar(),
                new Cigar()
            }.ToAsyncEnumerable());
            mockCigarRepository.Setup(x => x.Exists(It.IsAny<int>())).Returns(Task.FromResult(true));
                                                                                                                                         ;
            mockCountryRepository = new Mock<ICountryRepository>();
            mockCountryRepository.Setup(x => x.GetAllDistinct()).Returns(new List<string>
            {
                "test1", "test2"
            }.ToAsyncEnumerable());

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

        [Fact]
        public void GetCigarByIdShouldInvokeGetById()
        {
            cigarService.GetCigarById(It.IsAny<int>());
            mockCigarRepository.Verify(x => x.GetById(It.IsAny<int>()));
        }

        [Fact]
        public void CigarExistsShouldCallRepositoryExists()
        {
            cigarService.CigarExists(1);
            mockCigarRepository.Verify(x => x.Exists(It.IsAny<int>()));
        }

        [Fact]
        public async void CigarExistsShouldReturnRepositoryResult()
        {
            var actual = await cigarService.CigarExists(1);
            var expected = await mockCigarRepository.Object.Exists(1);
            Assert.Equal(expected, actual);
        }
    }
}
