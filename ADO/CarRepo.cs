using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CarsLibrary.Data.Interfaces;
using CarsLibrary.Models.Queries;
using CarsLibrary.Models.Tables;
using Dapper;

namespace CarsLibrary.Data.ADO
{
    public class CarRepo : ICarsRepo
    {
        //attempt at using dapper to simplify basic get requests.
        public List<GetInventoryReportRequest> GetNewInventory()
        {
            using (var cn = new SqlConnection())
            {
                cn.ConnectionString = cn.ConnectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
                var result = cn.Query<GetInventoryReportRequest>("InventoryNewReport", commandType: CommandType.StoredProcedure).ToList();
                return result;
            }
        }
        //attempt at using dapper to simplify basic get requests.
        public List<GetInventoryReportRequest> GetUsedInventory()
        {
            using (var cn = new SqlConnection())
            {
                cn.ConnectionString = cn.ConnectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
                return cn.Query<GetInventoryReportRequest>("InventoryUsedReport", commandType: CommandType.StoredProcedure).ToList();
            }
        }

        public CarInfo GetById(int vehicleId)
        {
            CarInfo vehicle = null;

            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("VehicleSelect", cn) { CommandType = CommandType.StoredProcedure };

                cmd.Parameters.AddWithValue("@VehicleId", vehicleId);

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    if (dr.Read())
                    {
                        vehicle = new CarInfo
                        {
                            VehicleId = (int)dr["VehicleId"],
                            UserId = dr["UserId"].ToString(),
                            CarMakeId = (int)dr["CarMakeId"],
                            CarModelId = (int)dr["CarModelId"],
                            CarTransmissionOptionId = (int)dr["CarTransmissionOptionId"],
                            CarSalePrice = (decimal)dr["CarSalePrice"],
                            CarMfgPrice = (decimal)dr["CarMfgprice"],
                            CarBodyStyleId = (int)dr["CarBodyStyleId"],
                            CarTypeId = (int)dr["CarTypeId"],
                            CarYear = Convert.ToString(dr["CarYear"]),
                            CarExteriorColorId = (int)dr["CarExteriorColorId"],
                            CarInteriorColorId = (int)dr["CarInteriorColorId"],
                            CarMileage = (int)dr["CarMileage"],
                            CarVin = dr["CarVin"].ToString(),
                            MakeName = dr["CarMakeName"].ToString(),
                            ModelName = dr["CarModelName"].ToString(),
                            CarTypeName = dr["CarTypeChoice"].ToString(),
                            CarTransmissionName = dr["CarTransmissionSelection"].ToString(),
                            CarBodyStyleName = dr["CarBodyStyleChoice"].ToString(),
                            CarInteriorColorName = dr["CarInteriorColorSelected"].ToString(),
                            CarExteriorColorName = dr["CarExteriorColorSelected"].ToString()
                        };

                        if (dr["CarDescription"] != DBNull.Value)
                            vehicle.CarDescription = dr["CarDescription"].ToString();
                        if (dr["CarImageFileLocation"] != DBNull.Value)
                            vehicle.CarImageFileLocation = dr["CarImageFileLocation"].ToString();

                        //currentRow.CarExteriorColorId = Convert.ToInt32(dr["CarExteriorColorId"]);
                        //currentRow.CarExteriorColorSelected = dr["CarExteriorColorSelected"].ToString();

                        //exteriorColor.Add(currentRow);
                    }
                }
            }

            return vehicle;
        }

        public int Insert(AddNewCarRequest vehicle)
        {
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("VehicleInsert", cn) { CommandType = CommandType.StoredProcedure };

                SqlParameter param =
                    new SqlParameter("@VehicleId", SqlDbType.Int) { Direction = ParameterDirection.Output };

                cmd.Parameters.Add(param);

                cmd.Parameters.AddWithValue("@UserId", vehicle.UserId);
                cmd.Parameters.AddWithValue("@CarMakeId", vehicle.CarMakeId);
                cmd.Parameters.AddWithValue("@CarSalePrice", vehicle.CarSalePrice);
                cmd.Parameters.AddWithValue("@CarMfgPrice", vehicle.CarMfgPrice);
                cmd.Parameters.AddWithValue("@CarTransmissionOptionId", vehicle.CarTransmissionOptionId);
                cmd.Parameters.AddWithValue("@CarModelId", vehicle.CarModelId);
                cmd.Parameters.AddWithValue("@CarBodyStyleId", vehicle.CarBodyStyleId);
                cmd.Parameters.AddWithValue("@CarTypeId", vehicle.CarTypeId);
                cmd.Parameters.AddWithValue("@CarYear", Convert.ToInt32(vehicle.CarYear));
                cmd.Parameters.AddWithValue("@CarExteriorColorId", vehicle.CarExteriorColorId);
                cmd.Parameters.AddWithValue("@CarInteriorColorId", vehicle.CarInteriorColorId);
                cmd.Parameters.AddWithValue("@CarMileage", vehicle.CarMileage);
                cmd.Parameters.AddWithValue("@CarVin", vehicle.CarVin);
                cmd.Parameters.AddWithValue("@CarDescription", vehicle.CarDescription);
                cmd.Parameters.AddWithValue("@CarImageFileLocation", vehicle.CarImageFileLocation);
                cmd.Parameters.AddWithValue("@IsFeatured", vehicle.IsFeatured);
                cmd.Parameters.AddWithValue("@IsSold", 0);

                cn.Open();

                cmd.ExecuteNonQuery();

                vehicle.VehicleId = (int)param.Value;
                return vehicle.VehicleId;
            }
        }

        public void Update(AddNewCarRequest vehicle)
        {
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("VehicleUpdate", cn) { CommandType = CommandType.StoredProcedure };

                cmd.Parameters.AddWithValue("@VehicleId", vehicle.VehicleId);
                cmd.Parameters.AddWithValue("@UserId", vehicle.UserId);
                cmd.Parameters.AddWithValue("@CarMakeId", vehicle.CarMakeId);
                cmd.Parameters.AddWithValue("@CarSalePrice", vehicle.CarSalePrice);
                cmd.Parameters.AddWithValue("@CarMfgPrice", vehicle.CarMfgPrice);
                cmd.Parameters.AddWithValue("@CarTransmissionOptionId", vehicle.CarTransmissionOptionId);
                cmd.Parameters.AddWithValue("@CarModelId", vehicle.CarModelId);
                cmd.Parameters.AddWithValue("@CarBodyStyleId", vehicle.CarBodyStyleId);
                cmd.Parameters.AddWithValue("@CarTypeId", vehicle.CarTypeId);
                cmd.Parameters.AddWithValue("@CarYear", vehicle.CarYear);
                cmd.Parameters.AddWithValue("@CarExteriorColorId", vehicle.CarExteriorColorId);
                cmd.Parameters.AddWithValue("@CarInteriorColorId", vehicle.CarInteriorColorId);
                cmd.Parameters.AddWithValue("@CarMileage", vehicle.CarMileage);
                cmd.Parameters.AddWithValue("@CarVin", vehicle.CarVin);
                cmd.Parameters.AddWithValue("@CarDescription", vehicle.CarDescription);
                cmd.Parameters.AddWithValue("@CarImageFileLocation", vehicle.CarImageFileLocation);
                cmd.Parameters.AddWithValue("@IsFeatured", vehicle.IsFeatured);

                cn.Open();

                cmd.ExecuteNonQuery();

            }

        }

        public void Delete(int vehicleId)
        {
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("VehicleDelete", cn) { CommandType = CommandType.StoredProcedure };

                cmd.Parameters.AddWithValue("@VehicleId", vehicleId);

                cn.Open();

                cmd.ExecuteNonQuery();

            }

        }

        public IEnumerable<FeaturedVehiclesRequest> GetFeatured()
        {
            var vehicleList = new List<FeaturedVehiclesRequest>();

            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("FeaturedVehicles", cn) { CommandType = CommandType.StoredProcedure };

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {

                        var vehicle = new FeaturedVehiclesRequest
                        {
                            CarMakeName = dr["CarMakeName"].ToString(),
                            ListingId = (int)dr["VehicleId"],
                            CarSalePrice = (decimal)dr["CarSalePrice"],
                            CarYear = Convert.ToString(dr["CarYear"]),
                            CarModelName = dr["CarModelName"].ToString()
                        };
                        //look at making these strings
                        if (dr["CarImageFileLocation"] != DBNull.Value)
                            vehicle.CarImageFileLocation = dr["CarImageFileLocation"].ToString();

                        vehicleList.Add(vehicle);
                    }
                }
            }
            return vehicleList;
        }

        public IEnumerable<NewInventoryRequest> GetNew()
        {
            var vehicleList = new List<NewInventoryRequest>();

            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("GetNewCars", cn) { CommandType = CommandType.StoredProcedure };

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {

                        var vehicle = new NewInventoryRequest
                        {
                            CarMake = dr["CarMakeName"].ToString(),
                            ListingId = (int)dr["VehicleId"],
                            CarSalePrice = (decimal)dr["CarSalePrice"],
                            CarYear = Convert.ToString(dr["CarYear"]),
                            CarModel = dr["CarModelName"].ToString(),
                            CarBodyStyle = dr["CarBodyStyleChoice"].ToString(),
                            CarTransmissionOption = dr["CarTransmissionSelection"].ToString(),
                            CarExteriorColor = dr["CarExteriorColorSelected"].ToString(),
                            CarInteriorColor = dr["CarInteriorColorSelected"].ToString(),
                            CarMileage= Convert.ToInt32(dr["CarMileage"]),
                            CarVin = dr["CarVin"].ToString(),
                            CarMfgPrice = (decimal)dr["CarMfgPrice"],
                        };
                        //look at making these strings
                        if (dr["CarImageFileLocation"] != DBNull.Value)
                            vehicle.CarImageFileLocation = dr["CarImageFileLocation"].ToString();

                        vehicleList.Add(vehicle);
                    }
                }
            }
            return vehicleList;
        }

        public IEnumerable<NewInventoryRequest> GetNewSearch(DateTime minYear, DateTime maxYear)
        {

            List<NewInventoryRequest> vehicleList = new List<NewInventoryRequest>();
            using (var conn = new SqlConnection(Settings.GetConnectionString()))
            {
                //conn.ConnectionString = ConfigurationManager.ConnectionStrings["GuildCars"].ToString();

                SqlCommand cmd = new SqlCommand("NewTop20Search")
                {
                    Connection = conn,
                    CommandType = CommandType.StoredProcedure
                };

                //SqlParameter SearchEntry = cmd.Parameters.Add("@SearchEntry", SqlDbType.NVarChar);
                //SearchEntry.Value = searchParameter.SearchQuery;
                //SearchEntry.Direction = ParameterDirection.Input;

                //SqlParameter maxPrice = cmd.Parameters.Add("@MaxPrice", SqlDbType.Decimal);
                //maxPrice.Value = searchParameter.MaxPrice;
                //maxPrice.Direction = ParameterDirection.Input;

                //SqlParameter minPrice = cmd.Parameters.Add("@MinPrice", SqlDbType.Decimal);
                //minPrice.Value = searchParameter.MinPrice;
                //minPrice.Direction = ParameterDirection.Input;

                cmd.Parameters.AddWithValue("@MinYear", minYear);
                cmd.Parameters.AddWithValue("@MaxYear", maxYear);
                cmd.Parameters.AddWithValue("@SearchEntry", "ford");
                cmd.Parameters.AddWithValue("@MinPrice", 10);
                cmd.Parameters.AddWithValue("@MaxPrice", 5000000);

                conn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        NewInventoryRequest row = new NewInventoryRequest
                        {
                            ListingId = (int) dr["VehicleID"],
                            CarMake = dr["MakeName"].ToString(),
                            CarModel = dr["ModelName"].ToString(),
                            CarYear = Convert.ToString(dr["CarYear"]),
                            CarMfgPrice = (decimal) dr["MSRP"],
                            CarSalePrice = (decimal) dr["SalesPrice"],
                            CarBodyStyle = dr["Style"].ToString(),
                            CarTransmissionOption = dr["Style"].ToString(),
                            CarExteriorColor = dr["Color"].ToString(),
                            CarInteriorColor = dr["Interior"].ToString(),
                            CarMileage = (int) dr["Mileage"],
                            CarVin = dr["CarVin"].ToString(),
                            CarImageFileLocation = dr["ImageUri"].ToString()
                        };

                        vehicleList.Add(row);
                    }
                }
            }
            return vehicleList;
        }

        public IEnumerable<UsedInventoryRequest> GetUsed()
        {
            var vehicleList = new List<UsedInventoryRequest>();

            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("GetUsedCars", cn) { CommandType = CommandType.StoredProcedure };

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {

                        var vehicle = new UsedInventoryRequest
                        {
                            CarMake = dr["CarMakeName"].ToString(),
                            ListingId = (int)dr["VehicleId"],
                            CarSalePrice = (decimal)dr["CarSalePrice"],
                            CarYear = Convert.ToString(dr["CarYear"]),
                            CarModel = dr["CarModelName"].ToString(),
                            CarBodyStyle = dr["CarBodyStyleChoice"].ToString(),
                            CarTransmissionOption = dr["CarTransmissionSelection"].ToString(),
                            CarExteriorColor = dr["CarExteriorColorSelected"].ToString(),
                            CarInteriorColor = dr["CarInteriorColorSelected"].ToString(),
                            CarMileage = Convert.ToInt32(dr["CarMileage"]),
                            CarVin = Convert.ToString(dr["CarVin"]),
                            CarMfgPrice = (decimal)dr["CarMfgPrice"],
                        };
                        //look at making these strings
                        if (dr["CarImageFileLocation"] != DBNull.Value)
                            vehicle.CarImageFileLocation = dr["CarImageFileLocation"].ToString();

                        vehicleList.Add(vehicle);
                    }
                }
            }
            return vehicleList;
        }

        public DetailsRequest GetDetails(int vehicleId)
        {
            DetailsRequest vehicle = null;

            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("VehicleDetails", cn) { CommandType = CommandType.StoredProcedure };

                cmd.Parameters.AddWithValue("@VehicleId", vehicleId);

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    if (dr.Read())
                    {
                        vehicle = new DetailsRequest
                        {
                            VehicleId = (int)dr["VehicleId"],
                            CarMakeId = (int)dr["CarMakeId"],
                            CarMake = dr["CarMakeName"].ToString(),
                            CarModelId = (int)dr["CarModelId"],
                            CarModel = dr["CarModelName"].ToString(),
                            CarTransmissionChoiceId = (int)dr["CarTransmissionOptionId"],
                            CarTransmissionSelection = dr["CarTransmissionSelection"].ToString(),
                            CarSalePrice = (decimal)dr["CarSalePrice"],
                            CarMfgPrice = (decimal)dr["CarMfgprice"],
                            CarBodyStyleId = (int)dr["CarBodyStyleId"],
                            CarBodyStyle = dr["CarBodyStyleChoice"].ToString(),
                            CarTypeId = (int)dr["CarTypeId"],
                            CarType = dr["CarTypeChoice"].ToString(),
                            CarYear = Convert.ToString(dr["CarYear"]),
                            CarExteriorColorId = (int)dr["CarExteriorColorId"],
                            CarExteriorColor = dr["CarExteriorColorSelected"].ToString(),
                            CarInteriorColorId = (int)dr["CarInteriorColorId"],
                            CarInteriorColor = dr["CarInteriorColorSelected"].ToString(),
                            CarMileage = (int)dr["CarMileage"],
                            CarVin = dr["CarVin"].ToString(),
                            IsFeatured = Convert.ToBoolean(dr["FeaturedVehicle"])
                            
                        };
                        
                        if (dr["CarDescription"] != DBNull.Value)
                            vehicle.CarDescription = dr["CarDescription"].ToString();
                        if (dr["CarImageFileLocation"] != DBNull.Value)
                            vehicle.CarImageFileLocation = dr["CarImageFileLocation"].ToString();

                    }
                }
            }

            return vehicle;

        }

        public IEnumerable<InventoryRequest> GetAll()
        {
            List<InventoryRequest> carDetails = new List<InventoryRequest>();
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("VehicleSelectAll", cn) { CommandType = CommandType.StoredProcedure };

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {

                        InventoryRequest currentRow = new InventoryRequest
                        {
                            ListingId = (int)dr["VehicleId"],
                            CarMakeId = Convert.ToInt32(dr["CarMakeId"]),
                            CarSalePrice = Convert.ToDecimal(dr["CarSalePrice"]),
                            CarMfgPrice = Convert.ToDecimal(dr["CarMfgPrice"]),
                            CarTransmissionOptionId = Convert.ToInt32(dr["CarTransmissionOptionId"]),
                            CarModelId = Convert.ToInt32(dr["CarModelId"]),
                            CarBodyStyleId = Convert.ToInt32(dr["CarBodyStyleId"]),
                            CarTypeId = Convert.ToInt32(dr["CarTypeId"]),
                            CarYear = Convert.ToString(dr["CarYear"]),
                            CarExteriorColorId = Convert.ToInt32(dr["CarExteriorColorId"]),
                            CarInteriorColorId = Convert.ToInt32(dr["CarInteriorColorId"]),
                            CarMileage = Convert.ToInt32(dr["CarMileage"]),
                            CarVin = Convert.ToString(dr["CarVin"]),
                            CarDescription = Convert.ToString(dr["CarDescription"]),
                            CarImageFileLocation = Convert.ToString(dr["CarImageFileLocation"]),
                            CarBodyStyle = Convert.ToString(dr["CarBodyStyleChoice"]),
                            CarModel = Convert.ToString(dr["CarModelName"]),
                            CarExteriorColor = Convert.ToString(dr["CarExteriorColorSelected"]),
                            CarInteriorColor = Convert.ToString(dr["CarInteriorColorSelected"]),
                            CarMake = Convert.ToString(dr["CarMakeName"]),
                            CarTransmissionOption = Convert.ToString(dr["CarTransmissionSelection"]),
                            IsSold = Convert.ToBoolean(dr["IsSold"])
                        };
                        carDetails.Add(currentRow);
                    }
                }
            }
            return carDetails;
        }

        public IEnumerable<NewInventoryRequest> GetNewTop20(ListingSearchParameter parameters)
        {
            var vehicleList = new List<NewInventoryRequest>();

            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                string query = "SELECT Top 20 " +
                               "" +
                               "CarType.CarTypeChoice, VehicleId,CarYear,CarMake.CarMakeName,VehicleInfo.CarMakeId,CarModel.CarModelName," +
                               "VehicleInfo.CarModelId,CarImageFileLocation,CarBodyStyle.CarBodyStyleChoice,VehicleInfo.CarBodyStyleId,CarTransmissionOption.CarTransmissionSelection," +
                               "VehicleInfo.CarTransmissionOptionId,CarExteriorColor.CarExteriorColorSelected,VehicleInfo.CarExteriorColorId,CarInteriorColor.CarInteriorColorSelected," +
                               "VehicleInfo.CarInteriorColorId,CarMileage,CarVin,CarSalePrice,CarMfgPrice,CarType.CarTypeChoice,VehicleInfo.CarTypeId,CarDescription " +
                               "" +
                               "FROM VehicleInfo " +
                               "" +
                               "INNER JOIN CarMake ON VehicleInfo.CarMakeId = CarMake.CarMakeId " +
                               "INNER JOIN CarModel ON VehicleInfo.CarModelId = CarModel.CarModelId " +
                               "INNER JOIN CarBodyStyle ON VehicleInfo.CarBodyStyleId = CarBodyStyle.CarBodyStyleId " +
                               "INNER JOIN CarTransmissionOption ON VehicleInfo.CarTransmissionOptionId = CarTransmissionOption.CarTransmissionOptionId " +
                               "INNER JOIN CarExteriorColor ON VehicleInfo.CarExteriorColorId = CarExteriorColor.CarExteriorColorId " +
                               "INNER JOIN CarInteriorColor ON VehicleInfo.CarInteriorColorId = CarInteriorColor.CarInteriorColorId " +
                               "INNER JOIN CarType ON VehicleInfo.CarTypeId = CarType.CarTypeId " +
                               "" +
                               "WHERE CarType.CarTypeId = 1 ";
                SqlCommand cmd = new SqlCommand {Connection = cn};
                cn.Open();

                if (!string.IsNullOrEmpty(parameters.SearchQuery))
                {
                    query += "AND (CarMake.CarMakeName LIKE @SearchQuery OR CarModel.CarModelName LIKE @SearchQuery OR CarYear LIKE @SearchQuery) ";
                    cmd.Parameters.AddWithValue("@SearchQuery", parameters.SearchQuery + '%');
                }
                if (parameters.MinPrice.HasValue)
                {
                    query += "AND CarSalePrice >= @MinPrice ";
                    cmd.Parameters.AddWithValue("@MinPrice", parameters.MinPrice.Value);
                }
                if (parameters.MaxPrice.HasValue)
                {
                    query += "AND CarSalePrice <= @MaxPrice ";
                    cmd.Parameters.AddWithValue("@MaxPrice", parameters.MaxPrice.Value);
                }
                if (parameters.MinYear != "No Min")
                {
                    if (parameters.MinYear != null)
                    {
                        query += "AND CarYear >= @MinYear ";
                        cmd.Parameters.AddWithValue("@MinYear", parameters.MinYear);
                    }
                }
                if (parameters.MaxYear != "No Max")
                {
                    if (parameters.MaxYear != null)
                    {
                        query += "AND CarYear <= @MaxYear ";
                        cmd.Parameters.AddWithValue("@MaxYear", parameters.MaxYear);
                    }
                }

                query += "ORDER By CarSalePrice DESC";
                cmd.CommandText = query;
                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        var vehicle = new NewInventoryRequest
                        {
                            CarMake = dr["CarMakeName"].ToString(),
                            ListingId = (int)dr["VehicleId"],
                            CarSalePrice = (decimal)dr["CarSalePrice"],
                            CarYear = Convert.ToString(dr["CarYear"]),
                            CarModel = dr["CarModelName"].ToString(),
                            CarBodyStyle = dr["CarBodyStyleChoice"].ToString(),
                            CarTransmissionOption = dr["CarTransmissionSelection"].ToString(),
                            CarExteriorColor = dr["CarExteriorColorSelected"].ToString(),
                            CarInteriorColor = dr["CarInteriorColorSelected"].ToString(),
                            CarMileage = Convert.ToInt32(dr["CarMileage"]),
                            CarVin = Convert.ToString(dr["CarVin"]),
                            CarMfgPrice = (decimal)dr["CarMfgPrice"],
                        };
                        if (dr["CarImageFileLocation"] != DBNull.Value)
                            vehicle.CarImageFileLocation = dr["CarImageFileLocation"].ToString();

                        vehicleList.Add(vehicle);
                    }
                }
            }
            return vehicleList;

        }

        public IEnumerable<UsedInventoryRequest> GetUsedTop20(ListingSearchParameter parameters)
        {
            var vehicleList = new List<UsedInventoryRequest>();

            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                string query = "SELECT Top 20 " +
                               "" +
                               "CarType.CarTypeChoice, VehicleId,CarYear,CarMake.CarMakeName,VehicleInfo.CarMakeId,CarModel.CarModelName," +
                               "VehicleInfo.CarModelId,CarImageFileLocation,CarBodyStyle.CarBodyStyleChoice,VehicleInfo.CarBodyStyleId,CarTransmissionOption.CarTransmissionSelection," +
                               "VehicleInfo.CarTransmissionOptionId,CarExteriorColor.CarExteriorColorSelected,VehicleInfo.CarExteriorColorId,CarInteriorColor.CarInteriorColorSelected," +
                               "VehicleInfo.CarInteriorColorId,CarMileage,CarVin,CarSalePrice,CarMfgPrice,CarType.CarTypeChoice,VehicleInfo.CarTypeId,CarDescription " +
                               "" +
                               "FROM VehicleInfo " +
                               "" +
                               "INNER JOIN CarMake ON VehicleInfo.CarMakeId = CarMake.CarMakeId " +
                               "INNER JOIN CarModel ON VehicleInfo.CarModelId = CarModel.CarModelId " +
                               "INNER JOIN CarBodyStyle ON VehicleInfo.CarBodyStyleId = CarBodyStyle.CarBodyStyleId " +
                               "INNER JOIN CarTransmissionOption ON VehicleInfo.CarTransmissionOptionId = CarTransmissionOption.CarTransmissionOptionId " +
                               "INNER JOIN CarExteriorColor ON VehicleInfo.CarExteriorColorId = CarExteriorColor.CarExteriorColorId " +
                               "INNER JOIN CarInteriorColor ON VehicleInfo.CarInteriorColorId = CarInteriorColor.CarInteriorColorId " +
                               "INNER JOIN CarType ON VehicleInfo.CarTypeId = CarType.CarTypeId " +
                               "" +
                               "WHERE CarType.CarTypeId = 2 ";
                SqlCommand cmd = new SqlCommand { Connection = cn };
                cn.Open();

                if (!string.IsNullOrEmpty(parameters.SearchQuery))
                {
                    query += "AND (CarMake.CarMakeName LIKE @SearchQuery OR CarModel.CarModelName LIKE @SearchQuery OR CarYear LIKE @SearchQuery) ";
                    cmd.Parameters.AddWithValue("@SearchQuery", parameters.SearchQuery + '%');
                }
                if (parameters.MinPrice.HasValue)
                {
                    query += "AND CarSalePrice >= @MinPrice ";
                    cmd.Parameters.AddWithValue("@MinPrice", parameters.MinPrice.Value);
                }
                if (parameters.MaxPrice.HasValue)
                {
                    query += "AND CarSalePrice <= @MaxPrice ";
                    cmd.Parameters.AddWithValue("@MaxPrice", parameters.MaxPrice.Value);
                }
                if (parameters.MinYear != "No Min")
                {
                    if (parameters.MinYear != null)
                    {
                        query += "AND CarYear >= @MinYear ";
                        cmd.Parameters.AddWithValue("@MinYear", parameters.MinYear);
                    }
                    
                }
                if (parameters.MaxYear != "No Max")
                {
                    if (parameters.MaxYear != null)
                    {
                        query += "AND CarYear <= @MaxYear ";
                        cmd.Parameters.AddWithValue("@MaxYear", parameters.MaxYear);
                    }
                }

                query += "ORDER By CarSalePrice DESC";
                cmd.CommandText = query;
                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        var vehicle = new UsedInventoryRequest
                        {
                            CarMake = dr["CarMakeName"].ToString(),
                            ListingId = (int)dr["VehicleId"],
                            CarSalePrice = (decimal)dr["CarSalePrice"],
                            CarYear = Convert.ToString(dr["CarYear"]),
                            CarModel = dr["CarModelName"].ToString(),
                            CarBodyStyle = dr["CarBodyStyleChoice"].ToString(),
                            CarTransmissionOption = dr["CarTransmissionSelection"].ToString(),
                            CarExteriorColor = dr["CarExteriorColorSelected"].ToString(),
                            CarInteriorColor = dr["CarInteriorColorSelected"].ToString(),
                            CarMileage = Convert.ToInt32(dr["CarMileage"]),
                            CarVin = Convert.ToString(dr["CarVin"]),
                            CarMfgPrice = (decimal)dr["CarMfgPrice"],
                        };
                        if (dr["CarImageFileLocation"] != DBNull.Value)
                            vehicle.CarImageFileLocation = dr["CarImageFileLocation"].ToString();

                        vehicleList.Add(vehicle);
                    }
                }
            }
            return vehicleList;

        }

        public IEnumerable<InventoryRequest> GetAllAvailable(ListingSearchParameter parameters)
        {
            var vehicleList = new List<InventoryRequest>();

            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                string query = "SELECT " +
                               "" +
                               "IsSold, CarType.CarTypeChoice, VehicleId,CarYear,CarMake.CarMakeName,VehicleInfo.CarMakeId,CarModel.CarModelName," +
                               "VehicleInfo.CarModelId,CarImageFileLocation,CarBodyStyle.CarBodyStyleChoice,VehicleInfo.CarBodyStyleId,CarTransmissionOption.CarTransmissionSelection," +
                               "VehicleInfo.CarTransmissionOptionId,CarExteriorColor.CarExteriorColorSelected,VehicleInfo.CarExteriorColorId,CarInteriorColor.CarInteriorColorSelected," +
                               "VehicleInfo.CarInteriorColorId,CarMileage,CarVin,CarSalePrice,CarMfgPrice,CarType.CarTypeChoice,VehicleInfo.CarTypeId,CarDescription " +
                               "" +
                               "FROM VehicleInfo " +
                               "" +
                               "INNER JOIN CarMake ON VehicleInfo.CarMakeId = CarMake.CarMakeId " +
                               "INNER JOIN CarModel ON VehicleInfo.CarModelId = CarModel.CarModelId " +
                               "INNER JOIN CarBodyStyle ON VehicleInfo.CarBodyStyleId = CarBodyStyle.CarBodyStyleId " +
                               "INNER JOIN CarTransmissionOption ON VehicleInfo.CarTransmissionOptionId = CarTransmissionOption.CarTransmissionOptionId " +
                               "INNER JOIN CarExteriorColor ON VehicleInfo.CarExteriorColorId = CarExteriorColor.CarExteriorColorId " +
                               "INNER JOIN CarInteriorColor ON VehicleInfo.CarInteriorColorId = CarInteriorColor.CarInteriorColorId " +
                               "INNER JOIN CarType ON VehicleInfo.CarTypeId = CarType.CarTypeId " +
                               "" +
                               "WHERE IsSold = 0 ";
                SqlCommand cmd = new SqlCommand { Connection = cn };
                cn.Open();

                if (!string.IsNullOrEmpty(parameters.SearchQuery))
                {
                    query += "AND (CarMake.CarMakeName LIKE @SearchQuery OR CarModel.CarModelName LIKE @SearchQuery OR CarYear LIKE @SearchQuery) ";
                    cmd.Parameters.AddWithValue("@SearchQuery", parameters.SearchQuery + '%');
                }
                if (parameters.MinPrice.HasValue)
                {
                    query += "AND CarSalePrice >= @MinPrice ";
                    cmd.Parameters.AddWithValue("@MinPrice", parameters.MinPrice.Value);
                }
                if (parameters.MaxPrice.HasValue)
                {
                    query += "AND CarSalePrice <= @MaxPrice ";
                    cmd.Parameters.AddWithValue("@MaxPrice", parameters.MaxPrice.Value);
                }
                if (parameters.MinYear !="No Min")
                {
                    query += "AND CarYear >= @MinYear ";
                    cmd.Parameters.AddWithValue("@MinYear", parameters.MinYear);
                }
                if (/*!string.IsNullOrWhiteSpace(parameters.MaxYear) || */parameters.MaxYear != "No Max")
                {
                    query += "AND CarYear <= @MaxYear ";
                    cmd.Parameters.AddWithValue("@MaxYear", parameters.MaxYear);
                }

                query += "ORDER By CarSalePrice DESC";
                cmd.CommandText = query;
                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        var vehicle = new InventoryRequest
                        {
                            CarMake = dr["CarMakeName"].ToString(),
                            ListingId = (int)dr["VehicleId"],
                            CarSalePrice = (decimal)dr["CarSalePrice"],
                            CarYear = Convert.ToString(dr["CarYear"]),
                            CarModel = dr["CarModelName"].ToString(),
                            CarBodyStyle = dr["CarBodyStyleChoice"].ToString(),
                            CarTransmissionOption = dr["CarTransmissionSelection"].ToString(),
                            CarExteriorColor = dr["CarExteriorColorSelected"].ToString(),
                            CarInteriorColor = dr["CarInteriorColorSelected"].ToString(),
                            CarMileage = Convert.ToInt32(dr["CarMileage"]),
                            CarVin = Convert.ToString(dr["CarVin"]),
                            CarMfgPrice = (decimal)dr["CarMfgPrice"],
                        };
                        if (dr["CarImageFileLocation"] != DBNull.Value)
                            vehicle.CarImageFileLocation = dr["CarImageFileLocation"].ToString();

                        vehicleList.Add(vehicle);
                    }
                }
            }
            return vehicleList;
        }

    }
}
