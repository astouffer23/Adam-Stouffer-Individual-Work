using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using CarsLibrary.Models.Queries;

namespace CarsLibrary.UI.Models
{
    public class CarMakeViewModel :ValidationAttribute
    {
        //public int CarMakeId { get; set; }
        [Required(ErrorMessage = "that's not a name!")]
        public string MakeName { get; set; }
        public IEnumerable<GetCarMakeRequest> CarMakeName { get; set; }
        //public DateTime DateAdded { get; set; }
        //public string Email { get; set; }
        //public string Id { get; set; }
    }
}