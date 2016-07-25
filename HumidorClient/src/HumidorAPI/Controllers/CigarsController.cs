using System.Collections.Generic;
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
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/cigars/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var item = await cigarService.GetCigarById(id);

            if (item == null)
            {
                return NotFound();
            }

            return new ObjectResult(item);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
