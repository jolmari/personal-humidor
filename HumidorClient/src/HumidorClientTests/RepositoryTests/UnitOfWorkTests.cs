using System;
using System.Threading;
using HumidorClient.Data;
using HumidorClient.Services.Repositories;
using HumidorClient.Services.UnitOfWorkService;
using Moq;
using Xunit;

namespace HumidorClientTests.RepositoryTests
{
    public class UnitOfWorkTests
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly Mock<IApplicationDbContext> mockContext;
        private readonly Mock<CigarRepository> mockRepository;

        public UnitOfWorkTests()
        {
            mockContext = new Mock<IApplicationDbContext>();
            mockRepository = new Mock<CigarRepository>(mockContext.Object);
            unitOfWork = new UnitOfWork(mockContext.Object, mockRepository.Object);
        }

        [Fact]
        public void SaveChangesShouldInvokeContextSaveChanges()
        {
            unitOfWork.SaveChanges();
            mockContext.Verify(x => x.SaveChangesAsync(CancellationToken.None));
        }
    }
}
