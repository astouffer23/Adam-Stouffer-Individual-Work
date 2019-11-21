using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CarsLibrary.UI.Models
{
    public class FivePercentViewModel : ValidationAttribute
    {
        public string SalePrice { get; set; }
        public string PurchasePrice { get; set; }


    }
}