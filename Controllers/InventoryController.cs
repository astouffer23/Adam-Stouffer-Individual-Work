using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CarsLibrary.Data.Factories;
using CarsLibrary.UI.Models;

namespace CarsLibrary.UI.Controllers
{
    public class InventoryController : Controller
    {

        // GET: Inventory
        public ActionResult New()
        {
            var model = CarRepoFactory.GetRepository().GetNew();
            return View(model);
        }
        // GET: Inventory
        public ActionResult Used()
        {
            var model = CarRepoFactory.GetRepository().GetUsed();
            return View(model);
        }
        // GET: Inventory
        public ActionResult Details(int id)
        {
            var model = CarRepoFactory.GetRepository().GetDetails(id);
            return View(model);
        }
    }
}