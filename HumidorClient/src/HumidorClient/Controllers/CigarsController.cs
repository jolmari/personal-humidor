using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using HumidorClient.Data;
using HumidorClient.Models;
using HumidorClient.Models.CountryViewModel;
using HumidorClient.Services.CigarServices;

namespace HumidorClient.Controllers
{
    public class CigarsController : Controller
    {
        private readonly ICigarService cigarService;
        
        public CigarsController(ICigarService cigarService)
        {
            this.cigarService = cigarService;
        }

        // GET: Cigars
        public async Task<IActionResult> Index(string selectedCountry, string searchString)
        {
            var cigars = await cigarService.GetCigars(searchString, selectedCountry);
            var countries = await cigarService.GetCountries();

            return View(new CountryViewModel
            {
                Cigars = cigars,
                Countries = new SelectList(countries),
                SelectedCountry = selectedCountry
            });
        }

        // GET: Cigars/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var cigar = await cigarService.GetCigarById(id.Value);

            if (cigar == null)
            {
                return NotFound();
            }

            return View(cigar);
        }

        // GET: Cigars/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Cigars/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Country,ManufacturingDate,Name,Price,Rating")] Cigar cigar)
        {
            if (ModelState.IsValid)
            {
                await cigarService.AddNewCigar(cigar); 
                return RedirectToAction("Index");
            }
            return View(cigar);
        }

        // GET: Cigars/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var cigar = await cigarService.GetCigarById(id.Value);

            if (cigar == null)
            {
                return NotFound();
            }

            return View(cigar);
        }

        // POST: Cigars/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Country,ManufacturingDate,Name,Price,Rating")] Cigar cigar)
        {
            if (id != cigar.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    await cigarService.EditCigar(cigar);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!await cigarService.CigarExists(cigar.Id))
                    {
                        return NotFound();
                    }

                    throw;
                }
                return RedirectToAction("Index");
            }
            return View(cigar);
        }

        // GET: Cigars/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var cigar = await cigarService.GetCigarById(id.Value);
            if (cigar == null)
            {
                return NotFound();
            }

            return View(cigar);
        }

        // POST: Cigars/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var cigar = await cigarService.GetCigarById(id);
            await cigarService.RemoveCigar(cigar);
            return RedirectToAction("Index");
        }
    }
}
