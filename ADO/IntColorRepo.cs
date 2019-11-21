using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CarsLibrary.Data.Interfaces;
using CarsLibrary.Models.Queries;
using CarsLibrary.Models.Tables;

namespace CarsLibrary.Data.ADO
{
    public class IntColorRepo : IIntColorRepo
    {
        public List<GetInteriorColorRequest> GetAll()
        {
            List<GetInteriorColorRequest> interiorColor = new List<GetInteriorColorRequest>();
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd =
                    new SqlCommand("CarInteriorColorSelectAll", cn) {CommandType = CommandType.StoredProcedure};

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        GetInteriorColorRequest currentRow = new GetInteriorColorRequest
                        {
                            CarInteriorColorId = Convert.ToInt32(dr["CarInteriorColorId"]),
                            CarInteriorColorSelected = dr["CarInteriorColorSelected"].ToString()
                        };

                        interiorColor.Add(currentRow);
                    }
                }
            }
            return interiorColor;

        }

    }
}
