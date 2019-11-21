using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CarsLibrary.UI.Models
{
    public class ReportsInventoryViewModel
    {
        public List<ReportsInventoryViewModel> NewInventory { get; set; }

        public List<ReportsInventoryViewModel> UsedInventory { get; set; }

        public int Year { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Count { get; set; }
        public decimal StockVal { get; set; }

        public ReportsInventoryViewModel()
        {
            NewInventory = new List<ReportsInventoryViewModel>();
            UsedInventory = new List<ReportsInventoryViewModel>();
        }


    }
}