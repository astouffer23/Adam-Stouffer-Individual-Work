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
    public class SpecialsController : Controller
    {
        // GET: Specials
        public ActionResult Index()
        {
            var model = SpecialsRepoFactory.GetRepository().GetAll();
            return View(model);
        }

    }
}