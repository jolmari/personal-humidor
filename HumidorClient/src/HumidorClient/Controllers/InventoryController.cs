using System.Threading.Tasks;
using HumidorClient.Services.CigarInventoryServices;
using Microsoft.AspNetCore.Mvc;

namespace HumidorClient.Controllers
{
    public class InventoryController : Controller
    {
        private readonly ICigarInventoryService inventoryService;

        public InventoryController(ICigarInventoryService inventoryService)
        {
            this.inventoryService = inventoryService;
        }

        // GET: /Inventory/
        public async Task<IActionResult> Index()
        {
            var items = await inventoryService.GetInventory();
            return View(items);
        }
    }
}
