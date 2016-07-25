using HumidorAPI.Controllers;
using HumidorAPI.Models;
using HumidorAPI.Services.CigarService;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace HumidorAPITests.Controllers
{
    public class CigarsControllerTests
    {
        private readonly Mock<ICigarService> mockCigarService;
        private CigarsController controller;

        public CigarsControllerTests()
        {
            mockCigarService = new Mock<ICigarService>();
            controller = new CigarsController(mockCigarService.Object);
        }

        [Fact]
        public async void GetShouldReturnCigarWithWantedId()
        {
            var expected = new Cigar()
            {
                Id = 1
            };

            mockCigarService.Setup(x => x.GetCigarById(expected.Id)).ReturnsAsync(expected);

            var result = await controller.Get(1);
            var objectResult = Assert.IsType<ObjectResult>(result);
            var cigar = Assert.IsAssignableFrom<Cigar>(objectResult.Value);
            Assert.Equal(expected, cigar);
        }

        [Fact]
        public async void GetShouldReturnNotFoundIfCigarNotFound()
        {
            mockCigarService.Setup(x => x.GetCigarById(It.IsAny<int>())).ReturnsAsync(null);
            var result = await controller.Get(1);
            Assert.IsType<NotFoundResult>(result);
        }
        
    }
}
