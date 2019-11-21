using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CarsLibrary.Data.ADO;
using CarsLibrary.Data.Factories;
using CarsLibrary.Models.Queries;
using CarsLibrary.UI.Models;
using Microsoft.Ajax.Utilities;

namespace CarsLibrary.UI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            HomePageViewModel model = new HomePageViewModel()
            {
                AllCars = CarRepoFactory.GetRepository().GetFeatured(),
                AllSpecials = SpecialsRepoFactory.GetRepository().GetAll(),
            };
            List<HomePageViewModel> viewModel = new List<HomePageViewModel> {model};
            return View(viewModel.AsEnumerable());
        }

        public ActionResult Contact(int? vin,string carMake ,string carModel)
        {
            ViewBag.Message = "Your contact page.";
            AddContactUs contact = new AddContactUs();
            if (!string.IsNullOrEmpty(carMake))
            {
                contact.ContactMessage = "Hello I would like more information about the " + carMake + " " + carModel +
                                         " with the vin of: " + vin + ".\n\n";
            }
            else
            {
                contact.ContactMessage = "Hello I would like more information about your vehicles!\n\n";
            };
            return View(contact);
        }

        public ActionResult Specials()
        {
            var model = SpecialsRepoFactory.GetRepository().GetAll();
            return View(model);
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult Contact(AddContactUs model)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }
            var contact = new AddContactUs()
            {
                ContactName = model.ContactName,
                ContactEmail = model.ContactEmail,
                ContactPhone = model.ContactPhone,
                ContactMessage = model.ContactMessage
            };
            ContactUsRepoFactory.GetRepository().AddNewContactUs(contact);
            return RedirectToAction("Index");
        }
    }
}