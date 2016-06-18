using System;
using System.Linq;
using HumidorClient.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace HumidorClient.Models
{
    public class SeedData : ISeedData
    {
        private readonly IServiceProvider serviceProvider;

        public SeedData(IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
        }

        public void InitializeDatabase()
        {
            using (
                var context =
                    new ApplicationDbContext(
                        serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>()))
            {
                if (context.Cigar.Any())
                {
                    return;
                }

                context.Cigar.AddRange(
                    new Cigar
                    {
                        Name = "Bohemian Valour",
                        Country = "Nicaragua",
                        ManufacturingDate = new DateTime(2010, 4, 21),
                        Price = 87.20M,
                        Rating = "Excellent"
                    },
                    new Cigar
                    {
                        Name = "Siglo II",
                        Country = "Cuba",
                        ManufacturingDate = new DateTime(2015, 2, 15),
                        Price = 14.00M,
                        Rating = "Good"
                    },
                    new Cigar
                    {
                        Name = "Siglo VI",
                        Country = "Cuba",
                        ManufacturingDate = new DateTime(2013, 4, 1),
                        Price = 50.20M,
                        Rating = "Excellent"
                    }
                    );

                context.SaveChanges();
            }
        }
    }
}