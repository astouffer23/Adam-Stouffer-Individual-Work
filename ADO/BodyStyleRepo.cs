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
    public class BodyStyleRepo : IBodyStyleRepo
    {
        public List<GetCarBodyStyleRequest> GetAll()
        {
            List<GetCarBodyStyleRequest> bodyStyles = new List<GetCarBodyStyleRequest>();
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd =
                    new SqlCommand("CarBodyStyleSelectAll", cn) { CommandType = CommandType.StoredProcedure };

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        GetCarBodyStyleRequest currentRow = new GetCarBodyStyleRequest
                        {
                            CarBodyStyleId = dr["CarBodyStyleId"].ToString(),
                            CarBodyStyleChoice = dr["CarBodyStyleChoice"].ToString()
                        };

                        bodyStyles.Add(currentRow);
                    }
                }
            }
            return bodyStyles;
        }

    }
}
