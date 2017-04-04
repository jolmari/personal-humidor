using System;
using System.Linq;
using HumidorAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace HumidorAPI.Data.SeedData
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

                PopulateCigars(context);
            }
        }
        
        private static void PopulateCigars(ApplicationDbContext context)
        {
            context.Cigar.AddRange(
                new Cigar
                {
                    Name = "Bohemian Valour",
                    Country = "Nicaragua",
                    ManufacturingDate = new DateTime(2010, 4, 21),
                    Price = 87.20M,
                    Rating = 0
                },
                new Cigar
                {
                    Name = "Siglo II",
                    Country = "Cuba",
                    ManufacturingDate = new DateTime(2015, 2, 15),
                    Price = 14.00M,
                    Rating = 3
                },
                new Cigar
                {
                    Name = "Siglo VI",
                    Country = "Cuba",
                    ManufacturingDate = new DateTime(2013, 4, 1),
                    Price = 50.20M,
                    Rating = 5
                },
                new Cigar
                {
                    Name = "Romeo y Julieta II",
                    Country = "Cuba",
                    ManufacturingDate = new DateTime(2013, 4, 1),
                    Price = 15.20M,
                    Rating = 3
                },
                new Cigar
                {
                    Name = "Romeo y Julieta Churchill",
                    Country = "Cuba",
                    ManufacturingDate = new DateTime(2013, 4, 1),
                    Price = 25.70M,
                    Rating = 4
                },
                new Cigar
                {
                    Name = "Joya de Nicaragua",
                    Country = "Nicaragua",
                    ManufacturingDate = new DateTime(2013, 4, 1),
                    Price = 20.00M,
                    Rating = 3
                }

            );

            context.SaveChanges();
        }
    }
}