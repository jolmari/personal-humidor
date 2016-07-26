﻿using System;
using System.Collections.Generic;
using System.Linq;
using FluentAssertions;
using HumidorAPI.Controllers;
using HumidorAPI.Models;
using HumidorAPI.Services.CigarService;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Moq;
using Xunit;

namespace HumidorAPITests.Controllers
{
    public class CigarsControllerTests
    {
        private readonly Mock<ICigarService> mockCigarService;
        private readonly CigarsController controller;

        public CigarsControllerTests()
        {
            mockCigarService = new Mock<ICigarService>();
            controller = new CigarsController(mockCigarService.Object);
        }

        [Fact]
        public async void GetByIdShouldReturnCigarWithWantedId()
        {
            var expected = new Cigar()
            {
                Id = 1
            };

            mockCigarService.Setup(x => x.GetCigarById(expected.Id)).ReturnsAsync(expected);

            var actionResult = await controller.Get(1);

            actionResult.Should().BeOfType<ObjectResult>()
                .Which.Value.Should().BeAssignableTo<Cigar>()
                .Which.Should().Be(expected);
        }

        [Fact]
        public async void GetByIdShouldReturnNotFoundIfCigarNotFound()
        {
            mockCigarService.Setup(x => x.GetCigarById(It.IsAny<int>())).ReturnsAsync(null);
            var actionResult = await controller.Get(1);

            actionResult.Should().BeOfType<NotFoundResult>();
        }
        
        [Fact]
        public async void GetShouldReturnAListOfCigars()
        {
            var expected = GetTestCigars();
            mockCigarService.Setup(x => x.GetAllCigars()).Returns(expected);

            var actionResult = await controller.Get();

            actionResult.Should().BeOfType<ObjectResult>()
                .Which.Value.Should().BeAssignableTo<List<Cigar>>()
                .Which.Should().BeEquivalentTo(await expected.ToList());
        }

        [Fact]
        public async void CreateShouldCallAddNewCigarWithParameterItem()
        {
            var newCigar = new Cigar();
            await controller.Create(newCigar);
            mockCigarService.Verify(x => x.AddNewCigar(newCigar));
        }

        [Fact]
        public async void CreateShouldReturnBadRequestOnNullItem()
        {
            var actionResult = await controller.Create(null);

            actionResult.Should().BeOfType<BadRequestResult>();
        }

        [Fact]
        public async void CreateShouldReturnCreateAtRouteResponseWithLocation()
        {
            mockCigarService.Setup(x => x.AddNewCigar(It.IsAny<Cigar>())).ReturnsAsync(1);
            
            var actionResult = await controller.Create(new Cigar());

            var createdAtRouteResult = actionResult.Should().BeOfType<CreatedAtRouteResult>();
            createdAtRouteResult.Which.RouteName.Should().Be("GetCigar");    
            createdAtRouteResult.Which.RouteValues["id"].Should().Be(1);    
        }

        [Fact]
        public async void CreateShouldReturnCreateAtRouteResponseWithCigarObject()
        {
            mockCigarService.Setup(x => x.AddNewCigar(It.IsAny<Cigar>())).ReturnsAsync(1);
            
            var actionResult = await controller.Create(new Cigar());

            actionResult.Should().BeOfType<CreatedAtRouteResult>()
                .Which.Value.Should().BeAssignableTo<Cigar>();
        }

        [Fact]
        public async void CreateShouldReturnBadRequestWithValidationErrorsWhenModelStateIsInvalid()
        {
            controller.ModelState.AddModelError("error", "error");

            var actionResult = await controller.Create(new Cigar());

            actionResult.Should().BeOfType<BadRequestObjectResult>()
                .Which.Value.Should().BeAssignableTo<SerializableError>()
                .Which.Should().ContainKey("error");
        }

        [Fact]
        public async void UpdateShouldInvokeEditCigarWithParameterItemWhenItemExists()
        {
            var expected = new Cigar {Id=1};
            mockCigarService.Setup(x => x.CigarExists(It.IsAny<int>())).ReturnsAsync(true);

            await controller.Update(expected.Id.ToString(), expected);

            mockCigarService.Verify(x => x.EditCigar(expected));
        }

        [Fact]
        public async void UpdateShouldReturnNotFoundResultWithNonExistingItem()
        {
            mockCigarService.Setup(x => x.CigarExists(It.IsAny<int>())).ReturnsAsync(false);

            var actionResult = await controller.Update("1", new Cigar {Id=1});

            actionResult.Should().BeOfType<NotFoundResult>();
        }

        [Fact]
        public async void UpdateShouldInvokeEditCigarAndReturnNoContentResult()
        {
            var expected = new Cigar { Id = 1 };
            mockCigarService.Setup(x => x.CigarExists(It.IsAny<int>())).ReturnsAsync(true);

            var actionResult = await controller.Update("1", expected);

            mockCigarService.Verify(x => x.EditCigar(expected));
            actionResult.Should().BeOfType<NoContentResult>();
        }


        [Fact]
        public async void UpdateShouldReturnBadRequestResultWhenItemNull()
        {
            var actionResult = await controller.Update("Irrelevant", null);

            actionResult.Should().BeOfType<BadRequestResult>();
        }

        [Fact]
        public async void UpdateShouldReturnBadRequestResultWhenIdMismatch()
        {
            var actionResult = await controller.Update("2", new Cigar {Id = 1});

            actionResult.Should().BeOfType<BadRequestResult>();
        }

        [Fact]
        public async void DeleteShouldInvokeRemoveCigarAndReturnNoContentResult()
        {
            var expected = new Cigar();

            var actionResult = await controller.Delete(expected.Id);

            mockCigarService.Verify(x => x.RemoveCigar(expected.Id));
            actionResult.Should().BeOfType<NoContentResult>();
        }

        private static IAsyncEnumerable<Cigar> GetTestCigars()
        {
            return new List<Cigar>
            {
                new Cigar { Id = 1 },
                new Cigar { Id = 2 },
                new Cigar { Id = 3 }
            }.ToAsyncEnumerable();
        }
    }
}
