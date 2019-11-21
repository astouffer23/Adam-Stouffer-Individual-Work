using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CarsLibrary.UI.Models
{
    public class CarDetailsViewModel
    {
        public List<SelectListItem> CarMake { get; set; }
        public List<SelectListItem> CarModel { get; set; }
        public List<SelectListItem> CarBodyStyle { get; set; }
        public List<SelectListItem> CarExteriorColor { get; set; }
        public List<SelectListItem> CarInteriorColor { get; set; }
        public List<SelectListItem> CarTransmissionType { get; set; }
        public List<SelectListItem> CarFileName { get; set; }
        public List<SelectListItem> CarVin { get; set; }
        public List<SelectListItem> CarMiles { get; set; }
        public List<SelectListItem> CarSalePrice { get; set; }
        public List<SelectListItem> CarMsrp { get; set; }
        public List<SelectListItem> CarYear { get; set; }

        public CarDetailsViewModel()
        {
            CarMake = new List<SelectListItem>();
            CarModel = new List<SelectListItem>();
            CarBodyStyle = new List<SelectListItem>();
            CarExteriorColor = new List<SelectListItem>();
            CarInteriorColor = new List<SelectListItem>();
            CarTransmissionType = new List<SelectListItem>();
            CarFileName = new List<SelectListItem>();
            CarVin = new List<SelectListItem>();
            CarMiles = new List<SelectListItem>();
            CarVin = new List<SelectListItem>();
            CarMiles = new List<SelectListItem>();
            CarYear = new List<SelectListItem>();
        }
    }
}