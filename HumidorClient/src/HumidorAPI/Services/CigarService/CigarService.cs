using System.Collections.Generic;
using System.Threading.Tasks;
using HumidorAPI.Models;
using HumidorAPI.Services.UnitOfWork;
using System.Linq;

namespace HumidorAPI.Services.CigarService
{
    public class CigarService : ICigarService
    {
        private readonly IUnitOfWork unitOfWork;

        public CigarService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        //public async Task<List<string>> GetCountries()
        //{
        //    var countries = unitOfWork.CountryRepository.GetAllDistinct();
        //    return await countries.ToList();
        //}

        public async Task<Models.Cigar> GetCigarById(int id)
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
            return await cigars.ToList();
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