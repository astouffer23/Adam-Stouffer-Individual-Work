using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection.Emit;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Mvc;
using CarsLibrary.Data.ADO;
using CarsLibrary.Data.Factories;
using CarsLibrary.Models.Queries;
using CarsLibrary.UI.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;

namespace CarsLibrary.UI.Controllers
{
    public class AdminController : Controller
    {

        // GET: Admin
        [Authorize(Roles = "admin")]
        public ActionResult Vehicles()
        {
            var model = CarRepoFactory.GetRepository().GetAll();
            return View(model);
        }
        // GET: Admin
        [Authorize(Roles = "admin")]
        public ActionResult AddVehicle()
        {
            var model = new CarViewModel();
            var models = ModelRepoFactory.GetRepository().GetAll();
            foreach (var getCarModelRequest in models)
            {
                model.CarModel.Add(new SelectListItem()
                {
                    Value = getCarModelRequest.CarModelId.ToString(),
                    Text = getCarModelRequest.CarModelName,
                });
            }
            var makes = MakeRepoFactory.GetRepository().GetAll();
            foreach (var getCarMakeRequest in makes)
            {
                model.CarMake.Add(new SelectListItem()
                {
                    Value = getCarMakeRequest.CarMakeId.ToString(),
                    Text = getCarMakeRequest.CarMakeName
                });
            }
            var bodies = BodyStyleRepoFactory.GetRepository().GetAll();
            foreach (var getBodyStyleRequest in bodies)
            {
                model.CarBodyStyle.Add(new SelectListItem()
                {
                    Value = getBodyStyleRequest.CarBodyStyleId,
                    Text = getBodyStyleRequest.CarBodyStyleChoice
                });
            }
            var transOption = TransmissionRepoFactory.GetRepository().GetAll();
            foreach (var getTransRequest in transOption)
            {
                model.CarTranmission.Add(new SelectListItem()
                {
                    Value = getTransRequest.CarTransmissionChoiceId.ToString(),
                    Text = getTransRequest.CarTransmissionSelection
                });
            }
            var intColor = IntColorRepoFactory.GetRepository().GetAll();
            foreach (var getIntColorRequest in intColor)
            {
                model.CarInteriorColors.Add(new SelectListItem()
                {
                    Value = getIntColorRequest.CarInteriorColorId.ToString(),
                    Text = getIntColorRequest.CarInteriorColorSelected
                });
            }
            var extColor = ExtColorRepoFactory.GetRepository().GetAll();
            foreach (var getExtColorRequest in extColor)
            {
                model.CarExteriorColors.Add(new SelectListItem()
                {
                    Value = getExtColorRequest.CarExteriorColorId.ToString(),
                    Text = getExtColorRequest.CarExteriorColorSelected
                });
            }
            var carType = TypeRepoFactory.GetRepository().GetAll();
            foreach (var getCarTypeRequest in carType)
            {
                model.CarType.Add(new SelectListItem()
                {
                    Value = getCarTypeRequest.CarTypeId.ToString(),
                    Text = getCarTypeRequest.CarTypeName
                });
            }


            return View(model);
        }
        // GET: Admin
        [HttpGet]
        [Authorize(Roles = "admin")]
        public ActionResult EditVehicle(int id)
        {
            var returnedCar = CarRepoFactory.GetRepository().GetById(id);

            var model = new CarViewModel
            {
                IsFeatured = returnedCar.IsFeatured,
                MakeId = returnedCar.CarMakeId.ToString(),
                MakeName = returnedCar.MakeName,
                ModelName = returnedCar.ModelName,
                ModelId = returnedCar.CarModelId.ToString(),
                CarTypeName = returnedCar.CarTypeName,
                CarTransmissionName = returnedCar.CarTransmissionName,
                CarBodyStyleName = returnedCar.CarBodyStyleName,
                CarInteriorColorName = returnedCar.CarInteriorColorName,
                CarExteriorColorName = returnedCar.CarInteriorColorName,
                CarYearString = returnedCar.CarYear,
                Msrp = returnedCar.CarMfgPrice.ToString(),
                Mileage = returnedCar.CarMileage.ToString(),
                Vin = returnedCar.CarVin.ToString(),
                SalePrice = returnedCar.CarSalePrice.ToString(),
                Description = returnedCar.CarDescription,
                VehicleId = returnedCar.VehicleId,
                CarTypeId = returnedCar.CarTypeId.ToString(),
                CarBodyStyleId = returnedCar.CarBodyStyleId.ToString(),
                CarTransmissionId = returnedCar.CarTransmissionOptionId.ToString(),
                CarExteriorColorId = returnedCar.CarExteriorColorId.ToString(),
                CarInteriorColorId = returnedCar.CarInteriorColorId.ToString(),
                ImageFileLocation = returnedCar.CarImageFileLocation
            };


            var models = ModelRepoFactory.GetRepository().GetAll();
            foreach (var getCarModelRequest in models)
            {
                if (getCarModelRequest.CarModelName == model.ModelName)
                {
                    model.CarModel.Add(new SelectListItem()
                    {
                        Value = model.ModelId,
                        Text = model.ModelName
                    });
                }
                else
                {
                    model.CarModel.Add(new SelectListItem()
                    {
                        Value = getCarModelRequest.CarModelId.ToString(),
                        Text = getCarModelRequest.CarModelName,
                    });
                }


            }
            var makes = MakeRepoFactory.GetRepository().GetAll();
            foreach (var getCarMakeRequest in makes)
            {
                if (getCarMakeRequest.CarMakeName == model.MakeName)
                {
                    model.CarMake.Add(new SelectListItem()
                    {
                        Value = getCarMakeRequest.CarMakeId.ToString(),
                        Text = getCarMakeRequest.CarMakeName
                    });
                }
                else
                {
                    model.CarMake.Add(new SelectListItem()
                    {
                        Value = getCarMakeRequest.CarMakeId.ToString(),
                        Text = getCarMakeRequest.CarMakeName
                    });
                }

            }
            var bodies = BodyStyleRepoFactory.GetRepository().GetAll();
            foreach (var getBodyStyleRequest in bodies)
            {
                model.CarBodyStyle.Add(new SelectListItem()
                {
                    Value = getBodyStyleRequest.CarBodyStyleId,
                    Text = getBodyStyleRequest.CarBodyStyleChoice
                });
            }
            var transOption = TransmissionRepoFactory.GetRepository().GetAll();
            foreach (var getTransRequest in transOption)
            {
                model.CarTranmission.Add(new SelectListItem()
                {
                    Value = getTransRequest.CarTransmissionChoiceId.ToString(),
                    Text = getTransRequest.CarTransmissionSelection
                });
            }
            var intColor = IntColorRepoFactory.GetRepository().GetAll();
            foreach (var getIntColorRequest in intColor)
            {
                model.CarInteriorColors.Add(new SelectListItem()
                {
                    Value = getIntColorRequest.CarInteriorColorId.ToString(),
                    Text = getIntColorRequest.CarInteriorColorSelected
                });
            }
            var extColor = ExtColorRepoFactory.GetRepository().GetAll();
            foreach (var getExtColorRequest in extColor)
            {
                model.CarExteriorColors.Add(new SelectListItem()
                {
                    Value = getExtColorRequest.CarExteriorColorId.ToString(),
                    Text = getExtColorRequest.CarExteriorColorSelected
                });
            }
            var carType = TypeRepoFactory.GetRepository().GetAll();
            foreach (var getCarTypeRequest in carType)
            {
                model.CarType.Add(new SelectListItem()
                {
                    Value = getCarTypeRequest.CarTypeId.ToString(),
                    Text = getCarTypeRequest.CarTypeName
                });
            }

            return View(model);

        }
        // GET: Admin
        [Authorize(Roles = "admin")]
        public ActionResult Users()
        {
            var repo = AccountRepoFactory.GetRepository().GetAllUserListings();
            return View(repo);
        }
        // GET: Admin
        [Authorize(Roles = "admin")]
        public ActionResult AddUser()
        {
            var allRoles = (new ApplicationDbContext()).Roles.OrderBy(r => r.Name).ToList().Select(rr =>

                new SelectListItem { Value = rr.Name.ToString(), Text = rr.Name }).ToList();

            ViewBag.Roles = allRoles;

            return View();

        }
        // GET: Admin
        [HttpGet]
        [Authorize(Roles = "admin")]
        public ActionResult EditUser(string userId)
        {

            var allRoles = (new ApplicationDbContext()).Roles.OrderBy(r => r.Name).ToList().Select(rr =>

                new SelectListItem { Value = rr.Name.ToString(), Text = rr.Name }).ToList();

            ViewBag.Roles = allRoles;

            var model = new UserViewModel();
            var context = new ApplicationDbContext();
            var userMgr = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            var roleMgr = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));
            var roles = roleMgr.Roles.ToList();
            var users = userMgr.Users.ToList();

            foreach (var applicationUser in users)
            {
                if (applicationUser.Id == userId)
                {
                    model.Email = applicationUser.Email;
                    model.FirstName = applicationUser.FirstNameId;
                    model.LastName = applicationUser.LastNameId;
                    model.Role = roles.Where(role => role.Users.Any(u => u.UserId == userId)).Select(r => r.Name).FirstOrDefault().ToString();
                    model.Password = applicationUser.PasswordHash;
                    model.PasswordConfirm = applicationUser.PasswordHash;
                    break;
                }

            }

            return View(model);
        }
        [AcceptVerbs("Post")]
        [Authorize(Roles = "admin")]
        public ActionResult EditUser(UserViewModel model)
        {
            ApplicationDbContext context = new ApplicationDbContext();
            var userMgr = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            var roleMgr = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));
            var roles = roleMgr.Roles.ToList();
            var users = userMgr.Users.ToList();

            foreach (var applicationUser in users)
            {
                if (applicationUser.Id == model.UserId)
                {
                    applicationUser.PasswordHash = userMgr.PasswordHasher.HashPassword(model.Password);
                    applicationUser.Email = model.Email;
                    applicationUser.FirstNameId = model.FirstName;
                    applicationUser.LastNameId = model.LastName;
                    applicationUser.Email = model.Email;
                    if (model.Role == "admin")
                    {
                        userMgr.RemoveFromRole(model.UserId, "sales");
                        userMgr.RemoveFromRole(model.UserId, "disabled");
                        userMgr.AddToRole(model.UserId, "admin");
                    }
                    if (model.Role == "sales")
                    {
                        userMgr.RemoveFromRole(model.UserId, "disabled");
                        userMgr.RemoveFromRole(model.UserId, "admin");
                        userMgr.AddToRole(model.UserId, "sales");
                    }
                    if (model.Role == "disabled")
                    {
                        userMgr.RemoveFromRole(model.UserId, "admin");
                        userMgr.RemoveFromRole(model.UserId, "sales");
                        userMgr.AddToRole(model.UserId, "disabled");
                    }
                    userMgr.Update(applicationUser);
                }

            }
            return RedirectToAction("users");
        }
        // GET: Admin
        [Authorize(Roles = "admin")]
        public ActionResult Makes()
        {
            var makes = MakeRepoFactory.GetRepository().GetAll();
            CarMakeViewModel model = new CarMakeViewModel()
            {
                CarMakeName = makes
            };
            List<CarMakeViewModel> viewModel = new List<CarMakeViewModel> { model };
            return View(viewModel.AsEnumerable());
        }
        // GET: Admin
        [Authorize(Roles = "admin")]
        public ActionResult Models()
        {
            var makes = MakeRepoFactory.GetRepository().GetAll();
            var models = ModelRepoFactory.GetRepository().GetAll();
            CarModelViewModel car = new CarModelViewModel()
            {
                AllMakes = makes,
                AllModels = models
            };
            List<CarModelViewModel> viewModel = new List<CarModelViewModel> { car };
            return View(viewModel.AsEnumerable());
        }
        // GET: Admin
        [Authorize(Roles = "admin")]
        public ActionResult Specials()
        {
            var model = SpecialsRepoFactory.GetRepository().GetAll();
            return View(model);
        }

        [AcceptVerbs("Post")]
        public ActionResult DeleteFromSpecials(int specialId)
        {
            SpecialsRepoFactory.GetRepository().Delete(specialId);
            return RedirectToAction("specials", "admin");
        }

        public ActionResult Details(int id)
        {
            var model = CarRepoFactory.GetRepository().GetDetails(id);
            return View(model);
        }

        [HttpPost]
        public ActionResult AddVehicle(CarViewModel model)
        {
            int vehicleId = 0;
            // was a file uploaded? Did it have content?
            if (model.UploadedFile != null && model.UploadedFile.ContentLength > 0)
            {
                // turn the web path ~/Uploads into a directory (c:\foo\)
                string path = Path.Combine(Server.MapPath("~/Images"),
                    Path.GetFileName(model.UploadedFile.FileName));

                model.UploadedFile.SaveAs(path);
            }

            if (model.UploadedFile != null)
            {
                var car = new AddNewCarRequest()
                {
                    IsFeatured = model.IsFeatured,
                    UserId = User.Identity.GetUserId(),
                    CarYear = model.CarYearString,
                    CarMakeId = Convert.ToInt32(model.MakeName),
                    CarModelId = Convert.ToInt32(model.ModelVal),
                    CarDescription = model.Description,
                    CarVin = model.Vin,
                    CarSalePrice = Convert.ToDecimal(model.SalePrice),
                    CarMfgPrice = Convert.ToDecimal(model.Msrp),
                    CarMileage = Convert.ToInt32(model.Mileage),
                    CarBodyStyleId = Convert.ToInt32(model.CarBodyStyleName),
                    CarTypeId = Convert.ToInt32(model.CarTypeName),
                    CarImageFileLocation = model.UploadedFile.FileName,
                    CarTransmissionOptionId = Convert.ToInt32(model.Transmission),
                    CarInteriorColorId = Convert.ToInt32(model.IntColorName),
                    CarExteriorColorId = Convert.ToInt32(model.ExtColorName)

                };
                vehicleId = CarRepoFactory.GetRepository().Insert(car);
            }
            return RedirectToAction("EditVehicle", new { id = vehicleId });

        }

        [HttpPost]
        public ActionResult EditVehicles(CarViewModel model)
        {
            if (ModelState.IsValid)
            {
                // was a file uploaded? Did it have content?
                if (model.UploadedFile != null && model.UploadedFile.ContentLength > 0)
                {
                    // turn the web path ~/Uploads into a directory (c:\foo\)
                    string path = Path.Combine(Server.MapPath("~/Images"),
                        Path.GetFileName(model.UploadedFile.FileName));

                    model.UploadedFile.SaveAs(path);
                }

                if (model.UploadedFile != null)
                {
                    var car = new AddNewCarRequest()
                    {
                        IsFeatured = model.IsFeatured,
                        UserId = User.Identity.GetUserId(),
                        CarYear = model.CarYearString,
                        CarMakeId = Convert.ToInt32(model.MakeId),
                        CarModelId = Convert.ToInt32(model.ModelId),
                        CarDescription = model.Description,
                        CarVin = model.Vin,
                        CarSalePrice = Convert.ToDecimal(model.SalePrice),
                        CarMfgPrice = Convert.ToDecimal(model.Msrp),
                        CarMileage = Convert.ToInt32(model.Mileage),
                        CarBodyStyleId = Convert.ToInt32(model.CarBodyStyleId),
                        CarTypeId = Convert.ToInt32(model.CarTypeId),
                        CarImageFileLocation = model.UploadedFile.FileName,
                        CarTransmissionOptionId = Convert.ToInt32(model.CarTransmissionId),
                        CarInteriorColorId = Convert.ToInt32(model.CarInteriorColorId),
                        CarExteriorColorId = Convert.ToInt32(model.CarExteriorColorId),
                        VehicleId = model.VehicleId

                    };
                    CarRepoFactory.GetRepository().Update(car);
                }
                return RedirectToAction("Vehicles");
            }
            model.SetMakeItems(MakeRepoFactory.GetRepository().GetAll());
            model.SetModelItems(ModelRepoFactory.GetRepository().GetAll());
            model.SetBodyStyle(BodyStyleRepoFactory.GetRepository().GetAll());
            model.SetTypeItems(TypeRepoFactory.GetRepository().GetAll());
            model.SetTransItems(TransmissionRepoFactory.GetRepository().GetAll());
            model.SetExtColors(ExtColorRepoFactory.GetRepository().GetAll());
            model.SetIntColors(IntColorRepoFactory.GetRepository().GetAll());
            return View("EditVehicle", model);
            //;
            //TypeRepoFactory.GetRepository().GetAll();
            //;
            //ExtColorRepoFactory.GetRepository().GetAll();
            //IntColorRepoFactory.GetRepository().GetAll();

            //var makeRepo = new MakeRepo();
            //model.SetMakeItems(makeRepo.GetAll());
            //var modelRepo = new ModelRepo();
            //model.SetModelItems(modelRepo.GetAll());
            //var bodyRepo = new BodyStyleRepo();
            //model.SetBodyStyle(bodyRepo.GetAll());
            //var typeRepo = new TypeRepo();
            //model.SetTypeItems(typeRepo.GetAll());
            //var transRepo = new TransmissionRepo();
            //model.SetTransItems(transRepo.GetAll());
            //var extColRepo = new ExtColorRepo();
            //model.SetExtColors(extColRepo.GetAll());
            //var intColorRepo = new IntColorRepo();
            //model.SetIntColors(intColorRepo.GetAll());



        }
    }
}