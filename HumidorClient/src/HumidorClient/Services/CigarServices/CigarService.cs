using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HumidorClient.Models;
using HumidorClient.Services.UnitOfWorkService;

namespace HumidorClient.Services.CigarServices
{
    public class CigarService : ICigarService
    {
        private readonly IUnitOfWork unitOfWork;

        public CigarService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public async Task<List<string>> GetCountries()
        {
            var countries = unitOfWork.CountryRepository.GetAllDistinct();
            return await countries.ToList();
        }

        public async Task<Cigar> GetCigarById(int id)
        {
            return await unitOfWork.CigarRepository.GetById(id);
        }

        public async Task<bool> CigarExists(int id)
        {
            return await unitOfWork.CigarRepository.Exists(id);
        }

        public async Task<List<Cigar>> GetCigars(string searchString, string selectedCountry)
        {
            var cigars = unitOfWork.CigarRepository.GetFiltered(searchString, selectedCountry);
            return await Task.Run(() => cigars.ToList());
        }

        public async Task<int> AddNewCigar(Cigar item )
        {
            unitOfWork.CigarRepository.Add(item);
            return await unitOfWork.SaveChangesAsync();
        }

        public async Task<int> EditCigar(Cigar item)
        {
            unitOfWork.CigarRepository.Update(item);
            return await unitOfWork.SaveChangesAsync();
        }

        public async Task<int> RemoveCigar(Cigar item)
        {
            unitOfWork.CigarRepository.Delete(item);
            return await unitOfWork.SaveChangesAsync();
        }
    }
}
