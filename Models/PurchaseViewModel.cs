using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CarsLibrary.Models.Queries;
using CarsLibrary.UI.Attributes;

namespace CarsLibrary.UI.Models
{
    [MustBeTrue(ErrorMessage = "Sale Price must be within 5% of Purchase Price")]
    public class PurchaseViewModel : ValidationAttribute
    {
        public DetailsRequest Details { get; set; }

        [Required(ErrorMessage = "that's not a name!")]
        public string CustomerName { get; set; }
        public string PurchaseTypeName { get; set; }
        public string StateName { get; set; }
        public string UserId { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        [Required(ErrorMessage = "Street 1 is not optional!")]
        public string Street1 { get; set; }
        public string Street2 { get; set; }
        [Required(ErrorMessage = "that's not a city!")]
        public string City { get; set; }
        [Required(ErrorMessage = "that's not a zip!")]
        public string ZipCode { get; set; }
        [Required(ErrorMessage = "that's not a correct price!")]
        public string PurchasePrice { get; set; }
        public decimal SalePrice { get; set; }
        public string CarYear { get; set; }
        public string CarMake { get; set; }
        public string CarModel { get; set; }
        public string BodyStyle { get; set; }
        public string Interior { get; set; }
        public string Exterior { get; set; }
        public string Trans { get; set; }
        public string Mileage { get; set; }
        public int CarMileageInt { get; set; }
        public decimal Msrp { get; set; }
        public int InteriorColorId { get; set; }
        public int ExteriorColorId { get; set; }
        public string Vin { get; set; }
        public int VehicleId { get; set; }
        public int PurchaseTypeId { get; set; }
        public int StateId { get; set; }
        public int CarMakeId { get; set; }
        public int CarModelId { get; set; }
        public int BodyStyleId { get; set; }
        public int Type { get; set; }
        public int TransmissionId { get; set; }
        public int CarTypeId { get; set; }
        public string Description { get; set; }
        public string ImageFileLocation { get; set; }
        public List<SelectListItem> States { get; set; }
        public List<SelectListItem> PurchaseType { get; set; }


        public PurchaseViewModel()
        {
            States = new List<SelectListItem>();
            PurchaseType = new List<SelectListItem>();
        }

        public void SetPurchaseTypes(IEnumerable<GetPurchaseTypeRequest> pTypes)
        {
            foreach (var type in pTypes)
            {
                PurchaseType.Add(new SelectListItem()
                {
                    Value = type.PurchaseId,
                    Text = type.PurchaseName
                });
            }
        }

        public void SetStateItems(IEnumerable<GetStatesRequest> states)
        {
            foreach (var state in states)
            {
                States.Add(new SelectListItem()
                {
                    Value = state.StateId,
                    Text = state.StateName
                });
            }
        }

    }
}