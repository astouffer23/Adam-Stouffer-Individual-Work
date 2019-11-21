using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CarsLibrary.UI.Models
{
    public class SalesViewModel
    {
        public List<SalesViewModel> Users;

        public List<SelectListItem> User { get; set; }


        //ctor shortcut
        public SalesViewModel()
        {
            Users = new List<SalesViewModel>();
            User = new List<SelectListItem>();
        }



    }
}