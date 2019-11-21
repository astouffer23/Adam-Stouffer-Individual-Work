using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CarsLibrary.Models.Queries;
using CarsLibrary.Models.Tables;

namespace CarsLibrary.UI.Models
{
    public class AddVehicleViewModel
    {
        public IEnumerable<CarExteriorColor> CarExteriorColors { get; set; }
        public IEnumerable<GetCarTransmissionRequest> CarTranmission { get; set; }
        public IEnumerable<CarBodyStyle> CarBodyStyle { get; set; }
        public IEnumerable<GetCarMakeRequest> CarMake { get; set; }
        public IEnumerable<GetCarModelRequest> CarModel { get; set; }
        public IEnumerable<GetCarTypeRequest> CarType { get; set; }
        public IEnumerable<GetInteriorColorRequest> CarInteriorColors { get; set; }
        public DetailsRequest CurrentCarPick { get; set; }
    }
}
