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
                //PopulateInventoryItems(context);
            }
        }

        //private static void PopulateInventoryItems(ApplicationDbContext context)
        //{
        //    context.InventoryItem.AddRange(
        //        new InventoryItem
        //        {
        //            Quantity = 2,
        //            PurchaseDate = new DateTime(2016, 6, 7),
        //            Cigar = context.Cigar.First(x => x.Id == 1)
        //        },
        //        new InventoryItem
        //        {
        //            Quantity = 5,
        //            PurchaseDate = new DateTime(2016, 6, 5),
        //            Cigar = context.Cigar.First(x => x.Id == 3)
        //        },
        //        new InventoryItem
        //        {
        //            Quantity = 1,
        //            PurchaseDate = new DateTime(2014, 2, 10),
        //            Cigar = context.Cigar.First(x => x.Id == 2)
        //        }
        //        );

        //    context.SaveChanges();
        //}

        private static void PopulateCigars(ApplicationDbContext context)
        {
            context.Cigar.AddRange(
                new Cigar
                {
                    Name = "Bohemian Valour",
                    Country = "Nicaragua",
                    ManufacturingDate = new DateTime(2010, 4, 21),
                    Price = 87.20M,
                    Rating = "*****"
                },
                new Cigar
                {
                    Name = "Siglo II",
                    Country = "Cuba",
                    ManufacturingDate = new DateTime(2015, 2, 15),
                    Price = 14.00M,
                    Rating = "***"
                },
                new Cigar
                {
                    Name = "Siglo VI",
                    Country = "Cuba",
                    ManufacturingDate = new DateTime(2013, 4, 1),
                    Price = 50.20M,
                    Rating = "*****"
                }
                );

            context.SaveChanges();
        }
    }
}