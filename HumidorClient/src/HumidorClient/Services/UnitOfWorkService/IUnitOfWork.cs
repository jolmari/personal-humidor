﻿using System.Threading.Tasks;
using HumidorClient.Services.Repositories.Interfaces;

namespace HumidorClient.Services.UnitOfWorkService
{
    public interface IUnitOfWork
    {
        // TODO: This breaks the open/closed principle. Implement method to serve repositories based on interface type. Find a way to use the built-in injector's kernel.getservice<>.
        ICigarRepository CigarRepository { get; }
        ICountryRepository CountryRepository { get; }
        IInventoryItemRepository InventoryItemRepository { get; }
        Task<int> SaveChangesAsync();

    }
}