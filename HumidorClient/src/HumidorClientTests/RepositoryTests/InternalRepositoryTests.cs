﻿using System.Collections.Generic;
using System.Linq;
using HumidorClient.Data;
using HumidorClient.Models;
using HumidorClient.Services.Repositories;
using HumidorClient.Services.Repositories.Interfaces;
using HumidorClientTests.Helpers;
using Microsoft.EntityFrameworkCore;
using Moq;
using Xunit;

namespace HumidorClientTests.RepositoryTests
{
    public class InternalRepositoryTests
    {
        private readonly Mock<ApplicationDbContext> mockContext;
        private readonly Mock<DbSet<Cigar>> mockDbSet;
        private readonly IRepository<Cigar> repository;

        public InternalRepositoryTests()
        {
            var data = new List<Cigar>
            {
                new Cigar {Id = 1},
                new Cigar {Id = 2},
                new Cigar {Id = 3}
            }.AsQueryable();

            mockDbSet = DbContextHelpers.CreateMockDbSet(data);
            mockContext = DbContextHelpers.CreateMockDbContext(mockDbSet.Object);
            repository = new Repository<Cigar>(mockContext.Object);
        }

        [Fact]
        public void GetByIdShouldReturnEntityWithCorrectIdTest()
        {
            var actual = repository.GetById(1);
            Assert.Equal(1, actual.Id);
        }

        [Fact]
        public void GetByIdShouldReturnNullWithIncorrectIdTest()
        {
            var actual = repository.GetById(10);
            Assert.Null(actual);
        }

        [Fact]
        public void AddShouldAddNewEntityToDbSet()
        {
            repository.Add(new Cigar());
            mockDbSet.Verify(x => x.Add(It.IsAny<Cigar>()));
        }

        [Fact]
        public void UpdateShouldInvokeDbSetUpdate()
        {
            repository.Update(new Cigar {Id = 1});
            mockDbSet.Verify(x => x.Update(It.IsAny<Cigar>()));
        }

        [Fact]
        public void DeleteShouldInvokeDbSetDelete()
        {
            repository.Delete(new Cigar {Id = 1});
            mockDbSet.Verify(x => x.Remove(It.IsAny<Cigar>()));
        }

        [Fact]
        public void DisposeShouldCallContextDispose()
        {
            repository.Dispose();
            mockContext.Verify(x => x.Dispose());
        }

        [Fact]
        public void DisposeShouldThrowIfContextNull()
        {
            var repo = new Repository<Cigar>(null);
            repo.Dispose();
        }
    }
}