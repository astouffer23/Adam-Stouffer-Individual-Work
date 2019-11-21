using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CarsLibrary.Data.Interfaces;
using CarsLibrary.Models.Queries;

namespace CarsLibrary.Data.ADO
{
    public class StatesRepo : IStatesRepo
    {
        public IEnumerable<GetStatesRequest> GetAll()
        {
            List<GetStatesRequest> state = new List<GetStatesRequest>();
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("GetStates", cn) { CommandType = CommandType.StoredProcedure };

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        GetStatesRequest currentRow = new GetStatesRequest()
                        {
                            StateId = Convert.ToString(dr["StateId"]),
                            StateName = Convert.ToString(dr["StateName"])
                        };
                        state.Add(currentRow);
                    }
                }
            }
            return state;
        }
    }
}
