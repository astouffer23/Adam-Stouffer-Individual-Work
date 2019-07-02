using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WS2FD
{
    public class WSCompanies
    {
        public string companyName { get; set; }
        public string tier_level { get; set; }
        public string tm_name { get; set; }
        public string tm_phone { get; set; }
        public string tm_area { get; set; }
        public string ws_id { get; set; }
        public long fd_id { get; set; }
        public string ship_to { get; set; }
        public string sold_to { get; set; }
        public bool srCompany { get; set; }
    }

    public class ErrorList
    {
        public string companyName { get; set; }
        public string soldTo { get; set; }
        public string shipTo { get; set; }
        public string errorMessage { get; set; }
        public string errorReason { get; set; }
    }

    public class NewCompany
    {
        public string companyName { get; set; }
        public string soldTo { get; set; }
        public string shipTo { get; set; }
    }
}
