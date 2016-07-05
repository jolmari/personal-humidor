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
        private readonly Mock<CigarRepository> mockCigarRepository;
        private readonly Mock<CountryRepository> mockCountryRepository;

        public UnitOfWorkTests()
        {
            mockContext = new Mock<IApplicationDbContext>();
            mockCigarRepository = new Mock<CigarRepository>(mockContext.Object);
            mockCountryRepository = new Mock<CountryRepository>(mockContext.Object);
            unitOfWork = new UnitOfWork(mockContext.Object, mockCigarRepository.Object, mockCountryRepository.Object);
        }

        [Fact]
        public void SaveChangesShouldInvokeContextSaveChanges()
        {
            unitOfWork.SaveChangesAsync();
            mockContext.Verify(x => x.SaveChangesAsync(CancellationToken.None));
        }
    }
}
