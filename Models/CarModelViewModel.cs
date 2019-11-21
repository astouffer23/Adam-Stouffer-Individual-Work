using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using CarsLibrary.Models.Queries;
using CarsLibrary.Models.Tables;

namespace CarsLibrary.UI.Models
{
    public class CarModelViewModel
    {
        public IEnumerable<GetCarMakeRequest> AllMakes { get; set; }
        [Required(ErrorMessage = "that's not a name!")]
        [DataType(DataType.Text)]
        public IEnumerable<GetCarModelRequest> AllModels { get; set; }
    }
}