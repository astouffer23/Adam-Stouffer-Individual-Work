using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WS2FD
{
    using Newtonsoft.Json;

    public class SearchedCompany
    {
        [JsonObject]
        public class CustomFields
        {
            public object account_number { get; set; }
            public object company_website { get; set; }
            public string ship_to { get; set; }
            public object sold_to { get; set; }
            public string territory_manager { get; set; }
            public object tm_phone_number { get; set; }
            public object masterid { get; set; }
            public string sync_status { get; set; }
            public string sync_date { get; set; }
        }

        public class Result
        {
            public long id { get; set; }
            public string name { get; set; }
            public object description { get; set; }
            public object note { get; set; }
            public List<object> domains { get; set; }
            public CustomFields custom_fields { get; set; }
            public DateTime created_at { get; set; }
            public DateTime updated_at { get; set; }
        }

        public class RootObject
        {
            public List<Result> results { get; set; }
            public int total { get; set; }
        }

    }

}
