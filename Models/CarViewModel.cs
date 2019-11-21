using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CarsLibrary.Data.ADO;
using CarsLibrary.Data.Factories;
using CarsLibrary.Models.Queries;
using CarsLibrary.Models.Tables;

namespace CarsLibrary.UI.Models
{
    public class CarViewModel
    {
        public bool IsFeatured { get; set; }
        public string UserId { get; set; }
        public string MakeName { get; set; }
        public string ModelName { get; set; }
        public string CarTransmissionName { get; set; }
        public string CarInteriorColorName { get; set; }
        public string CarExteriorColorName { get; set; }
        public string ModelVal { get; set; }
        public string CarTypeName { get; set; }
        public string CarBodyStyleName { get; set; }
        public string IntColorName { get; set; }
        public string ExtColorName { get; set; }
        public string Description { get; set; }
        [Required(ErrorMessage = "Year is required.")]
        public string CarYearString { get; set; }
        [Required(ErrorMessage = "MSRP is required.")]
        public string Msrp { get; set; }
        [Required(ErrorMessage = "Vin is required.")]
        public string Vin { get; set; }
        [Required(ErrorMessage = "Sale Price is required.")]
        public string SalePrice { get; set; }
        [Required(ErrorMessage = "Mileage is required.")]
        public string Mileage { get; set; }
        public string Transmission { get; set; }
        public int VehicleId { get; set; }
        public string ModelId{ get; set; }
        public string MakeId { get; set; }
        public string CarTypeId { get; set; }
        public string CarBodyStyleId { get; set; }
        public string CarTransmissionId { get; set; }
        public string CarExteriorColorId { get; set; }
        public string CarInteriorColorId { get; set; }
        public string ImageFileLocation { get; set; }
        public List<SelectListItem> CarExteriorColors { get; set; }
        public List<SelectListItem> CarTranmission { get; set; }
        public List<SelectListItem> CarBodyStyle { get; set; }
        public List<SelectListItem> CarMake { get; set; }
        public List<SelectListItem> CarModel { get; set; }
        public List<SelectListItem> CarType { get; set; }
        public List<SelectListItem> CarInteriorColors { get; set; }
        public DetailsRequest CurrentCarPick { get; set; }
        [Required(ErrorMessage = "Pics are required.")]
        public HttpPostedFileBase UploadedFile { get; set; }

        public CarViewModel()
        {
            CarMake = new List<SelectListItem>();
            CarModel = new List<SelectListItem>();
            CarType = new List<SelectListItem>();
            CarTranmission = new List<SelectListItem>();
            CarBodyStyle = new List<SelectListItem>();
            CarInteriorColors = new List<SelectListItem>();
            CarExteriorColors = new List<SelectListItem>();

        }


        public void SetMakeItems(IEnumerable<GetCarMakeRequest> makes)
        {
            foreach (var carMake in makes)
            {
                  CarMake.Add(new SelectListItem()
                  {
                      Value = carMake.CarMakeId.ToString(),
                      Text = carMake.CarMakeName
                  });
            }
        }
        public void SetModelItems(IEnumerable<GetCarModelRequest> models)
        {
            foreach (var carMod in models)
            {
                CarModel.Add(new SelectListItem()
                {
                    Value = carMod.CarModelId.ToString(),
                    Text = carMod.CarModelName
                });
            }
        }
        public void SetTypeItems(IEnumerable<GetCarTypeRequest> types)
        {
            foreach (var type in types)
            {
                CarType.Add(new SelectListItem()
                {
                    Value = type.CarTypeId.ToString(),
                    Text = type.CarTypeName
                });
            }
        }
        public void SetBodyStyle(IEnumerable<GetCarBodyStyleRequest> bodies)
        {
            foreach (var body in bodies)
            {
                CarBodyStyle.Add(new SelectListItem()
                {
                    Value = body.CarBodyStyleId,
                    Text = body.CarBodyStyleChoice
                });
            }
        }
        public void SetTransItems(IEnumerable<GetCarTransmissionRequest> transmission)
        {
            foreach (var trans in transmission)
            {
                CarTranmission.Add(new SelectListItem()
                {
                    Value = trans.CarTransmissionChoiceId.ToString(),
                    Text = trans.CarTransmissionSelection
                });
            }
        }
        public void SetExtColors(IEnumerable<GetExtColorsRequest> extColors)
        {
            foreach (var color in extColors)
            {
                CarExteriorColors.Add(new SelectListItem()
                {
                    Value = color.CarExteriorColorId.ToString(),
                    Text = color.CarExteriorColorSelected
                });
            }
        }
        public void SetIntColors(IEnumerable<GetInteriorColorRequest> intColors)
        {
            foreach (var color in intColors)
            {
                CarInteriorColors.Add(new SelectListItem()
                {
                    Value = color.CarInteriorColorId.ToString(),
                    Text = color.CarInteriorColorSelected
                });
            }
        }
    }
}
