﻿using System.Threading;
using System.Threading.Tasks;
using HumidorClient.Data;
using HumidorClient.Repositories.Interfaces;

namespace HumidorClient.Services.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IApplicationDbContext context;

        public UnitOfWork(IApplicationDbContext context,
            ICigarRepository cigarRepository)
            //ICountryRepository countryRepository,
            //IInventoryItemRepository inventoryItemRepository)
        {
            this.context = context;
            CigarRepository = cigarRepository;
            //InventoryItemRepository = inventoryItemRepository;
            //CountryRepository = countryRepository;
        }

        public virtual ICigarRepository CigarRepository { get; }
        //public virtual ICountryRepository CountryRepository { get; }
        //public virtual IInventoryItemRepository InventoryItemRepository { get; }

        public async Task<int> SaveChangesAsync()
        {
            return await context.SaveChangesAsync(default(CancellationToken));
        }
    }
}