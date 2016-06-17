using Microsoft.AspNetCore.Mvc;

namespace HumidorClient.Controllers
{
    public class InventoryController : Controller
    {
        // GET: /Inventory/
        public IActionResult Index()
        {
            return View();
        }

        // GET: /Inventory/Welcome
        public IActionResult Welcome(string name, int numtimes = 1)
        {
            ViewData["message"] = $"Hello {name}";
            ViewData["numtimes"] = numtimes;

            return View();
        }
    }
}
