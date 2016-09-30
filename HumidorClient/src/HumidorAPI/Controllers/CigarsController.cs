using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HumidorAPI.Models;
using HumidorAPI.Services.CigarService;
using Microsoft.AspNetCore.Mvc;

namespace HumidorAPI.Controllers
{
    [Route("api/[controller]")]
    public class CigarsController : Controller
    {
        private readonly ICigarService cigarService;

        public CigarsController(ICigarService cigarService)
        {
            this.cigarService = cigarService;
        }

        // GET api/cigars
        [HttpGet]
        public async Task<IActionResult> Get(string name = null, int amount = 5)
        {
            List<Cigar> items;

            if (!string.IsNullOrWhiteSpace(name))
            {
                items = await cigarService.SearchCigarsByName(name).Take(amount).ToList();
            }
            else
            {
                items = await cigarService.GetAllCigars().Take(amount).ToList();
            }
            
            return new ObjectResult(items);
        }
        
        // GET api/cigars/5
        [HttpGet("{id}", Name = "GetCigar")]
        public async Task<IActionResult> Get(int id)
        {
            var item = await cigarService.GetCigarById(id);

            if (item == null)
            {
                return NotFound();
            }

            return new ObjectResult(item);
        }

        // POST api/cigars
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Cigar item)
        {
            if (item == null)
            {
                return BadRequest(ModelState);
            }

            if (!ModelState.IsValid) return BadRequest(ModelState);
            
            await cigarService.AddNewCigar(item);
            return CreatedAtRoute("GetCigar", new { item.Id }, item);
        }

        // PUT api/cigars/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id,[FromBody] Cigar item)
        {
            if (item == null || item.Id != int.Parse(id))
            {
                return BadRequest();
            }

            if(!ModelState.IsValid) return BadRequest(ModelState);

            if (!await cigarService.CigarExists(item.Id))
            {
                return NotFound();
            }

            await cigarService.EditCigar(item);
            return NoContent();
        }

        // DELETE api/cigars/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await cigarService.RemoveCigar(id);
            return NoContent();
        }
    }
}
