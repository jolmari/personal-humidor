using HumidorClient.Models;
using Microsoft.EntityFrameworkCore;

namespace HumidorClient.Data
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        
        public virtual DbSet<Cigar> Cigar { get; set; }
    }

}
