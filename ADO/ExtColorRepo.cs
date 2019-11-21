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
    public class ExtColorRepo : IExtColorRepo
    {
        public List<GetExtColorsRequest> GetAll()
        {
            List<GetExtColorsRequest> exteriorColor = new List<GetExtColorsRequest>();
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd =
                    new SqlCommand("CarExteriorColorSelectAll", cn) {CommandType = CommandType.StoredProcedure};

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        GetExtColorsRequest currentRow = new GetExtColorsRequest
                        {
                            CarExteriorColorId = Convert.ToInt32(dr["CarExteriorColorId"]),
                            CarExteriorColorSelected = dr["CarExteriorColorSelected"].ToString()
                        };

                        exteriorColor.Add(currentRow);
                    }
                }
            }
            return exteriorColor;
        }

    }
}
