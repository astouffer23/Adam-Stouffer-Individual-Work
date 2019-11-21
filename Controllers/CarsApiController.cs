using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;
using System.Web.UI.WebControls;
using System.Web.WebPages.Scope;
using CarsLibrary.Data.ADO;
using CarsLibrary.Data.Factories;
using CarsLibrary.Models.Queries;
using CarsLibrary.Models.Tables;
using Microsoft.Ajax.Utilities;

namespace CarsLibrary.UI.Controllers
{
    public class CarsApiController : ApiController
    {
        [System.Web.Http.Route("api/admin/specials")]
        [System.Web.Http.AcceptVerbs("GET")]
        public IHttpActionResult GetSpecials()
        {
            var model = SpecialsRepoFactory.GetRepository().GetAll();
            return Ok(model);
        }
        [System.Web.Http.Route("api/admin/makes")]
        [System.Web.Http.AcceptVerbs("Post")]
        public IHttpActionResult AddToMakes(AdminMakesRequest make)
        {
            if (ModelState.IsValid)
            {
                MakeRepoFactory.GetRepository().Insert(make);
                return Ok();
            }
            else
            {
                return Ok(make);
            }
        }
        [System.Web.Http.Route("api/cars/new")]
        [System.Web.Http.AcceptVerbs("Post")]
        public IHttpActionResult AddNewCar(AddNewCarRequest car)
        {
            CarRepoFactory.GetRepository().Insert(car);
            return Ok();
        }

        [System.Web.Http.Route("api/admin/models")]
        [System.Web.Http.AcceptVerbs("Post")]
        //                                  string carModel, string carMake, string userId, DateTime dateCreated
        public IHttpActionResult AddToModels(AdminModelsRequest model)
        {
            if (ModelState.IsValid)
            {
                ModelRepoFactory.GetRepository().Insert(model);
                return Ok();
            }
            else
            {
                return Ok(model);
            }
        }
        [System.Web.Http.Route("api/admin/specials")]
        [System.Web.Http.AcceptVerbs("Post")]
        public IHttpActionResult AddToSpecials(CarSpecials special)
        {
            SpecialsRepoFactory.GetRepository().Insert(special);
            return Ok();
        }
        [System.Web.Http.Route("api/admin/specials/{specialId}")]
        [System.Web.Http.AcceptVerbs("Post")]
        public IHttpActionResult DeleteFromSpecials(int specialId)
        {
            SpecialsRepoFactory.GetRepository().Delete(specialId);
            return Ok();
        }
        [System.Web.Http.Route("api/sales/contacts")]
        [System.Web.Http.AcceptVerbs("Post")]
        public IHttpActionResult AddToContacts(AddContactUs contact)
        {
            ContactUsRepoFactory.GetRepository().AddNewContactUs(contact);
            return Ok();
        }

        [System.Web.Http.Route("api/cars/new")]
        [System.Web.Http.AcceptVerbs("GET")]
        public IHttpActionResult GetNewTop20Search(decimal? minPrice, decimal? maxPrice, string minYear, string maxYear, string searchQuery)
        {
            var repo = CarRepoFactory.GetRepository();

            try
            {
                var parameters = new ListingSearchParameter()
                {
                    MinPrice = minPrice,
                    MaxPrice = maxPrice,
                    MinYear = minYear,
                    MaxYear = maxYear,
                    SearchQuery = searchQuery
                };
                var result = repo.GetNewTop20(parameters);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [System.Web.Http.Route("api/cars/used")]
        [System.Web.Http.AcceptVerbs("GET")]
        public IHttpActionResult GetUsedTop20Search(decimal? minPrice, decimal? maxPrice, string minYear, string maxYear, string searchQuery)
        {
            var repo = CarRepoFactory.GetRepository();

            try
            {
                var parameters = new ListingSearchParameter()
                {
                    MinPrice = minPrice,
                    MaxPrice = maxPrice,
                    MinYear = minYear,
                    MaxYear = maxYear,
                    SearchQuery = searchQuery
                };
                var result = repo.GetUsedTop20(parameters);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [System.Web.Http.Route("api/cars/all")]
        [System.Web.Http.AcceptVerbs("GET")]
        public IHttpActionResult GetAllAvailableSearch(decimal? minPrice, decimal? maxPrice, string minYear, string maxYear, string searchQuery)
        {
            var repo = CarRepoFactory.GetRepository();

            try
            {
                var parameters = new ListingSearchParameter()
                {
                    MinPrice = minPrice,
                    MaxPrice = maxPrice,
                    MinYear = minYear,
                    MaxYear = maxYear,
                    SearchQuery = searchQuery
                };
                var result = repo.GetAllAvailable(parameters);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [System.Web.Http.Route("api/cars/sales")]
        [System.Web.Http.AcceptVerbs("GET")]
        public IHttpActionResult GetAllUnsoldSearch(decimal? minPrice, decimal? maxPrice, string minYear, string maxYear, string searchQuery)
        {
            var repo = CarRepoFactory.GetRepository();

            try
            {
                var parameters = new ListingSearchParameter()
                {
                    MinPrice = minPrice,
                    MaxPrice = maxPrice,
                    MinYear = minYear,
                    MaxYear = maxYear,
                    SearchQuery = searchQuery
                };
                var result = repo.GetAllAvailable(parameters);





                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [System.Web.Http.Route("api/models/matching")]
        [System.Web.Http.AcceptVerbs("GET")]
        public IHttpActionResult GetMatchingModels(int makeId)
        {
            var repo = new ModelRepo();

            try
            {
                var result = repo.GetMatchingModels(makeId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [System.Web.Http.Route("api/sales")]
        [System.Web.Http.AcceptVerbs("GET")]
        public IHttpActionResult GetSalesSearch(string userId, string fromDate, string toDate)
        {
            var repo = new PurchaseTypeRepo();

            try
            {
                var parameters = new SalesSearchRequest()
                {
                    UserId = userId,
                    FromDate = fromDate,
                    ToDate = toDate,
                };
                var result = repo.GetSalesSearchResults(parameters);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
