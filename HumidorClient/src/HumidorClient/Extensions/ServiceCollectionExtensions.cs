using HumidorClient.Data;
using HumidorClient.Data.SeedData;
using HumidorClient.Repositories;
using HumidorClient.Repositories.Interfaces;
using HumidorClient.Services.CigarService;
using HumidorClient.Services.UnitOfWork;
using Microsoft.Extensions.DependencyInjection;

namespace HumidorClient.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddCustomServices(this IServiceCollection services)
        {
            services.AddTransient<ISeedData, SeedData>();
            services.AddScoped<IApplicationDbContext>(provider => provider.GetService<ApplicationDbContext>());
            services.AddScoped<ICigarRepository, CigarRepository>();
            services.AddScoped<ICigarService, CigarService>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            return services;
        }
    }
}
