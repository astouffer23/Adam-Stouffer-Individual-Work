using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarsLibrary.Models.Tables
{
    public class CarInfo
    {
        public string CarExteriorColorName { get; set; }
        public string CarInteriorColorName { get; set; }
        public int VehicleId { get; set; }
        public string UserId { get; set; }
        public int CarMakeId { get; set; }
        public string MakeName { get; set; }
        public decimal CarSalePrice { get; set; }
        public decimal CarMfgPrice { get; set; }
        public int CarTransmissionOptionId { get; set; }
        public int CarModelId { get; set; }
        public int CarBodyStyleId { get; set; }
        public int CarTypeId { get; set; }
        public string CarYear { get; set; }
        public int CarExteriorColorId { get; set; }
        public int CarInteriorColorId { get; set; }
        public int CarMileage { get; set; }
        public string CarVin { get; set; }
        public string CarDescription { get; set; }
        public string CarImageFileLocation { get; set; }
        public bool IsFeatured { get; set; }
        public string ModelName { get; set; }
        public string CarTypeName { get; set; }
        public string CarTransmissionName { get; set; }
        public string CarBodyStyleName { get; set; }
    }
}
