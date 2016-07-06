using System;
using System.Threading;
using HumidorClient.Data;
using HumidorClient.Services.Repositories;
using HumidorClient.Services.Repositories.Interfaces;
using HumidorClient.Services.UnitOfWorkService;
using Moq;
using Xunit;

namespace HumidorClientTests.RepositoryTests
{
    public class UnitOfWorkTests
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly Mock<IApplicationDbContext> mockContext;

        public UnitOfWorkTests()
        {
            mockContext = new Mock<IApplicationDbContext>();
            var mockCigarRepository = new Mock<ICigarRepository>();
            var mockCountryRepository = new Mock<ICountryRepository>();
            var mockInventoryRepository = new Mock<IInventoryItemRepository>();
            unitOfWork = new UnitOfWork(mockContext.Object, mockCigarRepository.Object, 
                mockCountryRepository.Object, mockInventoryRepository.Object);
        }

        [Fact]
        public void SaveChangesShouldInvokeContextSaveChanges()
        {
            unitOfWork.SaveChangesAsync();
            mockContext.Verify(x => x.SaveChangesAsync(CancellationToken.None));
        }
    }
}
