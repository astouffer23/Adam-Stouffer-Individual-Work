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
    public class TypeRepo : ITypeRepo
    {
        public IEnumerable<GetCarTypeRequest> GetAll()
        {
            List<GetCarTypeRequest> carType = new List<GetCarTypeRequest>();
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("CarTypeSelectAll", cn) { CommandType = CommandType.StoredProcedure };

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        GetCarTypeRequest currentRow = new GetCarTypeRequest
                        {
                            CarTypeId = Convert.ToInt32(dr["CarTypeId"]),
                            CarTypeName = dr["CarTypeChoice"].ToString()
                        };
                        carType.Add(currentRow);
                    }
                }
            }
            return carType;

        }

    }
}
