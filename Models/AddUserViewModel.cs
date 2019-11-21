using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CarsLibrary.Data.ADO;

namespace CarsLibrary.UI.Models
{
    public class AddUserViewModel
    {
        public IEnumerable<AccountRepo> AccountRepoFromVm { get; set; }
    }
}