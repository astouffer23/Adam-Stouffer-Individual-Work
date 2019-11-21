using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CarsLibrary.Data.Interfaces;
using CarsLibrary.Models.Tables;

namespace CarsLibrary.Data.ADO
{
    public class SpecialsRepo : ISpecialsRepo
    {
        public List<CarSpecials> GetAll()
        {


            List<CarSpecials> special = new List<CarSpecials>();
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("SpecialSelectAll", cn) {CommandType = CommandType.StoredProcedure};

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        CarSpecials currentRow = new CarSpecials
                        {
                            SpecialId = Convert.ToInt32(dr["SpecialId"]),
                            SpecialTitle = dr["SpecialTitle"].ToString(),
                            SpecialDescription = dr["SpecialDescription"].ToString()
                        };
                        special.Add(currentRow);
                    }
                }
            }
            return special;

        }

        public void Insert(CarSpecials special)
        {
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("SpecialAdd", cn) { CommandType = CommandType.StoredProcedure };

                SqlParameter param =
                    new SqlParameter("@SpecialId", SqlDbType.Int) { Direction = ParameterDirection.Output };

                cmd.Parameters.Add(param);

                cmd.Parameters.AddWithValue("@SpecialTitle", special.SpecialTitle);
                cmd.Parameters.AddWithValue("@SpecialDescription", special.SpecialDescription);

                cn.Open();

                cmd.ExecuteNonQuery();

                special.SpecialId = (int)param.Value;

            }
        }

        public void Delete(int specialId)
        {
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("SpecialsDelete", cn) { CommandType = CommandType.StoredProcedure };

                cmd.Parameters.AddWithValue("@SpecialId", specialId);

                cn.Open();

                cmd.ExecuteNonQuery();

            }

        }
    }

}
