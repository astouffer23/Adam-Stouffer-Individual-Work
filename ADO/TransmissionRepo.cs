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
    public class TransmissionRepo : ITransmissionRepo
    {
        public IEnumerable<GetCarTransmissionRequest> GetAll()
        {
            List<GetCarTransmissionRequest> transmissionOption = new List<GetCarTransmissionRequest>();
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd =
                    new SqlCommand("CarTransmissionSelectAll", cn) { CommandType = CommandType.StoredProcedure };

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        GetCarTransmissionRequest currentRow = new GetCarTransmissionRequest
                        {
                            CarTransmissionChoiceId = Convert.ToInt32(dr["CarTransmissionOptionId"]),
                            CarTransmissionSelection = Convert.ToString(dr["CarTransmissionSelection"])
                        };
                        transmissionOption.Add(currentRow);
                    }
                }
            }
            return transmissionOption;

        }

    }
}
