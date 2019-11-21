using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CarsLibrary.Data.ADO;
using CarsLibrary.Data.Factories;
using CarsLibrary.Models.Queries;
using CarsLibrary.UI.Models;
using Microsoft.AspNet.Identity;

namespace CarsLibrary.UI.Controllers
{
    public class SalesController : Controller
    {
        // GET: Sales
        [Authorize(Roles = "sales")]
        public ActionResult Index()
        {
            return View();
        }
        // GET: Sales
        [Authorize(Roles = "sales")]
        public ActionResult Purchase(int id)
        {
            var model = CarRepoFactory.GetRepository().GetDetails(id);
            var states = StatesRepoFactory.GetRepository().GetAll();
            var purchaseTypes = PurchaseTypeRepoFactory.GetRepository().GetAll();

            var returnedModel = new PurchaseViewModel
            {
                CarTypeId = model.CarTypeId,
                CarMakeId = model.CarMakeId,
                CarYear = model.CarYear,
                TransmissionId = model.CarTransmissionChoiceId,
                CarMake = model.CarMake,
                CarModelId = model.CarModelId,
                CarModel = model.CarModel,
                BodyStyleId = model.CarBodyStyleId,
                BodyStyle = model.CarBodyStyle,
                InteriorColorId = model.CarInteriorColorId,
                Interior = model.CarInteriorColor,
                ExteriorColorId = model.CarExteriorColorId,
                Exterior = model.CarExteriorColor,
                SalePrice = model.CarSalePrice,
                Trans = model.CarTransmissionSelection,
                Mileage = Convert.ToString(model.CarMileage),
                Msrp = model.CarMfgPrice,
                Vin = model.CarVin,
                Description = model.CarDescription,
                ImageFileLocation = model.CarImageFileLocation,
                VehicleId = model.VehicleId,
                UserId = model.UserId
            };

            foreach (var state in states)
            {
                returnedModel.States.Add(new SelectListItem()
                {
                    Value = state.StateId,
                    Text = state.StateName
                });
            }
            foreach (var purchaseType in purchaseTypes)
            {
                returnedModel.PurchaseType.Add(new SelectListItem()
                {
                    Value = purchaseType.PurchaseId,
                    Text = purchaseType.PurchaseName
                });
            }

            return View(returnedModel);
        }

        [HttpPost]
        public ActionResult Purchase(PurchaseViewModel model)
        {
            if (!ModelState.IsValid)
            {
                var details = CarRepoFactory.GetRepository().GetDetails(model.VehicleId);
                model.CarMake = details.CarMake;
                var states = StatesRepoFactory.GetRepository().GetAll();
                model.SetStateItems(states);
                var purchaseRepo = new PurchaseTypeRepo();
                var purchases = purchaseRepo.GetAll();
                model.SetPurchaseTypes(purchases);
                model.CarModel = details.CarModel;
                model.CarYear = details.CarYear;
                model.Description = details.CarDescription;
                model.BodyStyle = details.CarBodyStyle;
                model.SalePrice = details.CarSalePrice;
                model.Msrp = details.CarMfgPrice;
                model.VehicleId = details.VehicleId;
                model.CarMileageInt = details.CarMileage;
                model.Interior = details.CarInteriorColor;
                model.Exterior = details.CarExteriorColor;
                model.ImageFileLocation = details.CarImageFileLocation;
                model.Trans = details.CarTransmissionSelection;
                model.Vin = details.CarVin;
                model.CarTypeId = details.CarTypeId;
                model.CarYear = details.CarYear;
                return View(model);
            }
            else
            {
                var purchase = new PurchaseRequest()
                {
                    UserId = User.Identity.GetUserId(),
                    CarMakeId = model.CarMakeId,
                    CarModelId = model.CarModelId,
                    CarTypeId = model.CarTypeId,
                    CarBodyStyleId = model.BodyStyleId,
                    CarInteriorColorId = model.InteriorColorId,
                    CarExteriorColorId = model.ExteriorColorId,
                    CarTransmissionOptionId = model.TransmissionId,
                    CarYearId = Convert.ToInt32(model.CarYear),
                    CarSalePriceId = Convert.ToDecimal(model.SalePrice),
                    CarMfgPriceId = Convert.ToDecimal(model.Msrp),
                    CarMileageId = Convert.ToInt32(model.Mileage),
                    CarVinId = model.Vin,
                    CarDescriptionId = model.Description,
                    ContactName = model.CustomerName,
                    ContactPhone = model.Phone,
                    ContactEmail = model.Email,
                    ContactAddressStreet1 = model.Street1,
                    ContactAddressStreet2 = model.Street2,
                    ContactAddressCity = model.City,
                    ContactAddressZip = model.ZipCode,
                    PurchasePrice = model.PurchasePrice,
                    PurchaseType = model.PurchaseTypeName,
                    StateName = model.StateName,
                    VehicleId = model.VehicleId,
                    SoldDate = DateTime.Now
                };
                PurchaseTypeRepoFactory.GetRepository().Insert(purchase);
                return RedirectToAction("Index", "Home");
            }
        }
    }
}