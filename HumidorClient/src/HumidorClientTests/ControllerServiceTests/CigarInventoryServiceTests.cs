using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HumidorClient.Models;
using HumidorClient.Services.CigarInventoryServices;
using HumidorClient.Services.CigarServices;
using HumidorClient.Services.Repositories.Interfaces;
using HumidorClient.Services.UnitOfWorkService;
using Moq;
using Xunit;

namespace HumidorClientTests.ControllerServiceTests
{
    public class CigarInventoryServiceTests
    {
        private readonly ICigarInventoryService cigarInventoryServiceService;
        private readonly Mock<IUnitOfWork> mockUnitOfWork;
        private readonly Mock<ICigarRepository> mockCigarRepository;

        public CigarInventoryServiceTests()
        {
            mockCigarRepository = new Mock<ICigarRepository>();
            mockCigarRepository.Setup(x => x.GetFiltered(It.IsAny<string>(), It.IsAny<string>()))
                .Returns(new List<Cigar>
                {
                    new Cigar(),
                    new Cigar()
                }.ToAsyncEnumerable());
            mockCigarRepository.Setup(x => x.Exists(It.IsAny<int>())).Returns(Task.FromResult(true));
            
            mockUnitOfWork = new Mock<IUnitOfWork>();
            mockUnitOfWork.SetupGet(x => x.CigarRepository).Returns(mockCigarRepository.Object);

            cigarInventoryServiceService = new CigarInventoryService(mockUnitOfWork.Object);
        }

        [Fact]
        public async void GetInventoryShouldInvokeGetAll()
        {

        }

        [Fact]
        public async void GetInventoryShouldReturnRepositoryResults()
        {
            
        }
    }
}