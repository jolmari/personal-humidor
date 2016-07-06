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
        private readonly ICigarInventoryService cigarInventoryService;
        private readonly Mock<IUnitOfWork> mockUnitOfWork;
        private readonly Mock<IInventoryItemRepository> mockInventoryRepository;

        public CigarInventoryServiceTests()
        {
            mockInventoryRepository = new Mock<IInventoryItemRepository>();
            mockInventoryRepository.Setup(x => x.GetAll())
                .Returns(new List<InventoryItem>
                {
                    new InventoryItem(),
                    new InventoryItem()
                }.ToAsyncEnumerable());
            mockInventoryRepository.Setup(x => x.Exists(It.IsAny<int>())).Returns(Task.FromResult(true));
            
            mockUnitOfWork = new Mock<IUnitOfWork>();
            mockUnitOfWork.SetupGet(x => x.InventoryItemRepository).Returns(mockInventoryRepository.Object);

            cigarInventoryService = new CigarInventoryService(mockUnitOfWork.Object);
        }

        [Fact]
        public async void GetInventoryShouldInvokeGetAll()
        {
            await cigarInventoryService.GetInventory();
            mockInventoryRepository.Verify(x => x.GetAll());
        }

        [Fact]
        public async void GetInventoryShouldReturnRepositoryResults()
        {
            var actual = await cigarInventoryService.GetInventory();
            var expected = await mockInventoryRepository.Object.GetAll().ToList();
            Assert.Equal(expected, actual);
        }
    }
}