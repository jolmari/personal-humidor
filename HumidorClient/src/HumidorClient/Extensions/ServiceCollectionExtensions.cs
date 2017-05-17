using HumidorClient.Data;
using HumidorClient.Data.SeedData;
using HumidorClient.Repositories;
using HumidorClient.Repositories.Interfaces;
using HumidorClient.Services.CigarService;
using HumidorClient.Services.UnitOfWork;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace HumidorClient.Extensions
{
    public static class ServiceCollectionExtensions
    {
        /// <summary>
        /// Used to add custom services to the default IoC container.
        /// </summary>
        /// <param name="serviceCollection">IoC container</param>
        /// <returns>Altered IoC container</returns>
        public static IServiceCollection AddCustomServices(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<ISeedData, SeedData>();
            serviceCollection.AddScoped<IApplicationDbContext>(provider => provider.GetService<ApplicationDbContext>());
            serviceCollection.AddScoped<ICigarRepository, CigarRepository>();
            serviceCollection.AddScoped<ICigarService, CigarService>();
            serviceCollection.AddScoped<IUnitOfWork, UnitOfWork>();
            return serviceCollection;
        }
    }
}
