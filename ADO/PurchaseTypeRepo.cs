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
    public class PurchaseTypeRepo : IPurchaseTypeRepo
    {
        public List<GetPurchaseTypeRequest> GetAll()
        {
            List<GetPurchaseTypeRequest> state = new List<GetPurchaseTypeRequest>();
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("GetPurchaseTypes", cn) { CommandType = CommandType.StoredProcedure };

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        GetPurchaseTypeRequest currentRow = new GetPurchaseTypeRequest()
                        {
                            PurchaseId = Convert.ToString(dr["PurchaseTypeId"]),
                            PurchaseName = Convert.ToString(dr["PurchaseTypeName"])
                        };
                        state.Add(currentRow);
                    }
                }
            }
            return state;
        }

        public void Insert(PurchaseRequest request)
        {
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("AddPurchase", cn) { CommandType = CommandType.StoredProcedure };
                SqlParameter param =
                    new SqlParameter("@PurchaseId", SqlDbType.Int) { Direction = ParameterDirection.Output };

                cmd.Parameters.Add(param);
                cmd.Parameters.AddWithValue("@UserId", request.UserId);
                cmd.Parameters.AddWithValue("@CarMakeId", request.CarMakeId);
                cmd.Parameters.AddWithValue("@CarModelId", request.CarModelId);
                cmd.Parameters.AddWithValue("@CarTypeId", request.CarTypeId);
                cmd.Parameters.AddWithValue("@CarBodyStyleId", request.CarBodyStyleId);
                cmd.Parameters.AddWithValue("@CarInteriorId", request.CarInteriorColorId);
                cmd.Parameters.AddWithValue("@CarExteriorId", request.CarExteriorColorId);
                cmd.Parameters.AddWithValue("@CarTransmissionId", request.CarTransmissionOptionId);
                cmd.Parameters.AddWithValue("@CarYear", request.CarYearId);
                cmd.Parameters.AddWithValue("@CarSalePrice", request.CarSalePriceId);
                cmd.Parameters.AddWithValue("@CarMfgPrice", request.CarMfgPriceId);
                cmd.Parameters.AddWithValue("@CarMileage", request.CarMileageId);
                cmd.Parameters.AddWithValue("@CarVin", request.CarVinId);
                cmd.Parameters.AddWithValue("@CarDescription", request.CarDescriptionId);
                cmd.Parameters.AddWithValue("@CustomerName", request.ContactName);
                cmd.Parameters.AddWithValue("@CustomerEmail", request.ContactEmail);
                cmd.Parameters.AddWithValue("@CustomerPhone", request.ContactPhone);
                cmd.Parameters.AddWithValue("@Street1", request.ContactAddressStreet1);
                if (request.ContactAddressStreet2 == null)
                {
                    cmd.Parameters.AddWithValue("@Street2", "none provided");
                }
                else
                {
                    cmd.Parameters.AddWithValue("@Street2", request.ContactAddressStreet2);
                }
                cmd.Parameters.AddWithValue("@City", request.ContactAddressCity);
                cmd.Parameters.AddWithValue("@StateId", request.StateName);
                cmd.Parameters.AddWithValue("@Zip", request.ContactAddressZip);
                cmd.Parameters.AddWithValue("@PurchasePrice", request.PurchasePrice);
                cmd.Parameters.AddWithValue("@PurchaseType", request.PurchaseTypeId);
                cmd.Parameters.AddWithValue("@VehicleId", request.VehicleId);
                cmd.Parameters.AddWithValue("@SoldDate", request.SoldDate);

                cn.Open();

               cmd.ExecuteNonQuery();

            }
        }

        public IEnumerable<SalesSearchRequest> GetSalesSearchResults(SalesSearchRequest parameters)
        {
            var salesList = new List<SalesSearchRequest>();

            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                string query = "SELECT " +
                               "" +
                               "AspNetUsers.UserName, SUM(SubmitPurchase.PurchasePrice) AS TotalSales, " +
                               "COUNT(SubmitPurchase.VehicleId) AS TotalVehicles " +
                               "FROM SubmitPurchase " +
                               "INNER JOIN AspNetUsers ON AspNetUsers.Id = SubmitPurchase.UserId ";

                SqlCommand cmd = new SqlCommand { Connection = cn };
                cn.Open();

                if (!string.IsNullOrEmpty(parameters.UserId))
                {
                    query += "WHERE UserId = @UserId ";
                    cmd.Parameters.AddWithValue("@UserId", parameters.UserId);
                }
                if (!string.IsNullOrEmpty(parameters.FromDate))
                {
                    query += "AND SubmitPurchase.SoldDate >= @FromDate ";
                    cmd.Parameters.AddWithValue("@FromDate", parameters.FromDate);
                }
                if (!string.IsNullOrEmpty(parameters.ToDate))
                {
                    query += "AND SubmitPurchase.SoldDate <= @ToDate ";
                    cmd.Parameters.AddWithValue("@ToDate", parameters.ToDate);
                }
                query += "GROUP BY UserName";
                cmd.CommandText = query;
                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        var user = new SalesSearchRequest()
                        {
                            UserName = dr["UserName"].ToString(),
                            TotalSales = dr["TotalSales"].ToString(),
                            TotalVehicles = Convert.ToInt32(dr["TotalVehicles"])
                        };
                        salesList.Add(user);
                    }
                }
            }
            return salesList;
        }
    }
}
