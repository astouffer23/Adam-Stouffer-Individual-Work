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
    public class ModelRepo : IModelRepo
    {
        public IEnumerable<GetMatchingModelsRequest> GetMatchingModels(int makeId)
        {
            List<GetMatchingModelsRequest> models = new List<GetMatchingModelsRequest>();

            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("GetMatchingModels", cn) { CommandType = CommandType.StoredProcedure };
                cmd.Parameters.AddWithValue("@CarModelMakeId", makeId);
                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        GetMatchingModelsRequest currentRow = new GetMatchingModelsRequest()
                        {
                            CarModelId = Convert.ToInt32(dr["CarModelId"]),
                            CarMakeId = Convert.ToInt32(dr["CarMakeId"]),
                            CarModelName = dr["CarModelName"].ToString(),
                            CarMakeName = dr["CarMakeName"].ToString()
                        };
                        models.Add(currentRow);
                    }
                }
            }
            return models;
        }

        public IEnumerable<GetCarModelRequest> GetAll()
        {
            List<GetCarModelRequest> model = new List<GetCarModelRequest>();
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("CarModelSelectAll", cn) {CommandType = CommandType.StoredProcedure};

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        GetCarModelRequest currentRow = new GetCarModelRequest
                        {
                            CarModelId = Convert.ToInt32(dr["CarModelId"]),
                            CarMakeId = Convert.ToInt32(dr["CarMakeId"]),
                            CarModelName = dr["CarModelName"].ToString(),
                            DateAdded = Convert.ToDateTime(dr["DateAdded"]),
                            Id = dr["Email"].ToString(),
                        };
                        model.Add(currentRow);
                    }
                }
            }
            return model;
        }

        public void Insert(AdminModelsRequest model)
        {
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("AddModel", cn) { CommandType = CommandType.StoredProcedure };

                SqlParameter param = new SqlParameter("@CarModelId", SqlDbType.Int) { Direction = ParameterDirection.Output };

                cmd.Parameters.Add(param);

                cmd.Parameters.AddWithValue("@CarModelName", model.CarModel);
                cmd.Parameters.AddWithValue("@DateAdded", DateTime.Today);
                //var info = System.Security.Principal.WindowsIdentity.GetCurrent().Name;
                cmd.Parameters.AddWithValue("@UserId", model.UserId);
                cmd.Parameters.AddWithValue("@CarMakeId", model.CarMake);


                cn.Open();


                cmd.ExecuteNonQuery();


            }
        }
    }
}
