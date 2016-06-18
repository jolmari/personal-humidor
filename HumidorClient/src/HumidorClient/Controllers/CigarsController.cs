using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using HumidorClient.Data;
using HumidorClient.Models;
using HumidorClient.Models.CountryViewModel;

namespace HumidorClient.Controllers
{
    public class CigarsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public CigarsController(ApplicationDbContext context)
        {
            _context = context;    
        }

        // GET: Cigars
        public async Task<IActionResult> Index(string selectedCountry, string searchString)
        {
            // TODO: Direct data access sucks. Create service layer.
            var countries = _context.Cigar.AsQueryable().Select(cig => cig.Country).Distinct();
            var cigars = _context.Cigar.AsQueryable();

            if (!string.IsNullOrEmpty(selectedCountry))
            {
                cigars = cigars.Where(c => c.Country.Contains(selectedCountry));
            }

            if (!string.IsNullOrEmpty(searchString))
            {
                cigars = cigars.Where(c => c.Name.Contains(searchString));
            }

            var viewModel = new CountryViewModel
            {
                Cigars = await cigars.ToListAsync(),
                Countries = new SelectList(await countries.ToListAsync()),
                SelectedCountry = selectedCountry
            };

            return View(viewModel);
        }

        // GET: Cigars/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var cigar = await _context.Cigar.SingleOrDefaultAsync(m => m.Id == id);
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
        public async Task<IActionResult> Create([Bind("Id,Country,ManufacturingDate,Name,Price")] Cigar cigar)
        {
            if (ModelState.IsValid)
            {
                _context.Add(cigar);
                await _context.SaveChangesAsync();
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

            var cigar = await _context.Cigar.SingleOrDefaultAsync(m => m.Id == id);
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
        public async Task<IActionResult> Edit(int id, [Bind("Id,Country,ManufacturingDate,Name,Price")] Cigar cigar)
        {
            if (id != cigar.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(cigar);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CigarExists(cigar.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
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

            var cigar = await _context.Cigar.SingleOrDefaultAsync(m => m.Id == id);
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
            var cigar = await _context.Cigar.SingleOrDefaultAsync(m => m.Id == id);
            _context.Cigar.Remove(cigar);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        private bool CigarExists(int id)
        {
            return _context.Cigar.Any(e => e.Id == id);
        }
    }
}
