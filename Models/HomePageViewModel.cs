using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CarsLibrary.Models.Queries;
using CarsLibrary.Models.Tables;

namespace CarsLibrary.UI.Models
{
    public class HomePageViewModel
    {
        public IEnumerable<FeaturedVehiclesRequest> AllCars { get; set; }
        public IEnumerable<CarSpecials> AllSpecials { get; set; }
    }

}