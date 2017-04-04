using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentAssertions;
using HumidorClient.Models;
using HumidorClient.Repositories.Interfaces;
using HumidorClient.Services.CigarService;
using HumidorClient.Services.UnitOfWork;
using Moq;
using Xunit;

namespace HumidorClientTests.Services
{
    public class CigarServiceTests
    {
        private readonly ICigarService cigarService;
        private readonly Mock<IUnitOfWork> mockUnitOfWork;
        private readonly Mock<ICigarRepository> mockCigarRepository;

        private readonly List<Cigar> testData;

        public CigarServiceTests()
        {
            testData = new List<Cigar>
            {
                new Cigar {Id=1, Name = "Sample Cigar 1"},
                new Cigar {Id=2, Name = "Sample Cigar 2"},
                new Cigar {Id=3, Name = "Demo Cigar"},
            };

            mockCigarRepository = new Mock<ICigarRepository>();
            mockCigarRepository.Setup(x => x.GetFiltered(It.IsAny<string>(), It.IsAny<string>()))
                .Returns(testData.ToAsyncEnumerable());
            mockCigarRepository.Setup(x => x.Exists(It.IsAny<int>())).Returns(Task.FromResult(true));
            
            mockUnitOfWork = new Mock<IUnitOfWork>();
            mockUnitOfWork.SetupGet(x => x.CigarRepository).Returns(mockCigarRepository.Object);
            
            cigarService = new CigarService(mockUnitOfWork.Object);
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
            cigarService.RemoveCigar(1);
            mockCigarRepository.Verify(x => x.Delete(1));
        }

        [Fact]
        public async void RemoveCigarShouldInvokeContextSaveChanges()
        {
            await cigarService.RemoveCigar(It.IsAny<int>());
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

        [Fact]
        public async void SearchCigarsByNameShouldReturnCigarsWithTermInName()
        {
            const string term = "Sample";
            var expected = testData.Where(x => x.Name.Contains(term));

            var actual = await cigarService.SearchCigarsByName(term).ToList();
            actual.Should().Contain(expected);
        }

        [Fact]
        public async void SearchCigarsByEmptyNameShouldReturnAllCigars()
        {
            var expected = testData;
            var actual = await cigarService.SearchCigarsByName("").ToList();
            actual.Should().Contain(expected);
        }
    }
}
