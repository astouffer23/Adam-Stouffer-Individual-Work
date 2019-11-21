using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CarsLibrary.Data.ADO;
using CarsLibrary.Data.Factories;
using CarsLibrary.UI.Models;

namespace CarsLibrary.UI.Controllers
{
    public class ReportsController : Controller
    {
        // GET: Reports
        [Authorize(Roles = "admin")]
        public ActionResult Index()
        {

            return View();
        }
        // GET: Reports
        [Authorize(Roles = "admin")]
        public ActionResult Sales()
        {
            var model = new SalesViewModel();
            var repo = new AccountRepo().GetAllUserListings();
            foreach (var user in repo)
            {
                model.User.Add(new SelectListItem()
                {
                    Value = user.UserId,
                    Text = user.FirstName + " " + user.LastName
                });
            }
            return View(model);
        }
        // GET: Reports
        [Authorize(Roles = "admin")]
        public ActionResult Inventory()
        {
            var model = new ReportsInventoryViewModel();
            var newList = CarRepoFactory.GetRepository().GetNewInventory();
            var usedList = CarRepoFactory.GetRepository().GetUsedInventory();
            foreach (var car in newList)
            {
                var selection = new ReportsInventoryViewModel
                {
                    Year = car.CarYear,
                    Make = car.CarMakeName,
                    Model = car.CarModelName,
                    Count = car.Count,
                    StockVal = car.StockValue
                };
                model.NewInventory.Add(selection);
            }
            foreach (var car in usedList)
            {
                var selection = new ReportsInventoryViewModel()
                {
                    Year = car.CarYear,
                    Make = car.CarMakeName,
                    Model = car.CarModelName,
                    Count = car.Count,
                    StockVal = car.StockValue
                };
                model.UsedInventory.Add(selection);
            }
            return View("Inventory", model);
        }
    }
}