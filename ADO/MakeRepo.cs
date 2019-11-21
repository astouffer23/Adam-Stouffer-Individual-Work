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
    public class MakeRepo : IMakeRepo
    {
        public IEnumerable<GetCarMakeRequest> GetAll()
        {
            var make = new List<GetCarMakeRequest>();
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("CarMakeSelectAll", cn) {CommandType = CommandType.StoredProcedure};

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        GetCarMakeRequest currentRow = new GetCarMakeRequest
                        {
                            CarMakeId = Convert.ToInt32(dr["CarMakeId"]),
                            CarMakeName = dr["CarMakeName"].ToString(),
                            Id = dr["UserId"].ToString(),
                            Email = dr["Email"].ToString(),
                            DateAdded = Convert.ToDateTime(dr["DateAdded"]) 
                        };
                        make.Add(currentRow);
                    }
                }
            }
            return make;
        }

        public void Insert(AdminMakesRequest make)
        {
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("AddMake", cn) { CommandType = CommandType.StoredProcedure };

                SqlParameter param = new SqlParameter("@CarMakeId", SqlDbType.Int) { Direction = ParameterDirection.Output };

                cmd.Parameters.Add(param);

                cmd.Parameters.AddWithValue("@CarMakeName", make.Make);
                //var info = System.Security.Principal.WindowsIdentity.GetCurrent().Name;
                cmd.Parameters.AddWithValue("@UserId", make.UserId);
                cmd.Parameters.AddWithValue("@DateAdded", DateTime.Today);


                cn.Open();

                cmd.ExecuteNonQuery();


            }
        }

    }
}
