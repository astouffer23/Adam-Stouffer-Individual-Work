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
    public class AccountRepo : IAccountRepo
    {
        public IEnumerable<AdminListUsersRequest> GetUserListings()
        {
            List<AdminListUsersRequest> list = new List<AdminListUsersRequest>();
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("GetUserListings", cn) { CommandType = CommandType.StoredProcedure };

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        AdminListUsersRequest row = new AdminListUsersRequest
                        {
                            EmailAddress = dr["Email"].ToString(),
                            FirstName = dr["FirstNameId"].ToString(),
                            LastName = dr["LastNameId"].ToString(),
                            Role = dr["Role"].ToString()
                        };
                        list.Add(row);
                    }
                }
            }
            return list;
        }


        public AdminEditUserRequest GetUser(string userId)
        {
            AdminEditUserRequest user = new AdminEditUserRequest();
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("GetSpecificUser", cn) { CommandType = CommandType.StoredProcedure };

                cmd.Parameters.AddWithValue("@Email", userId);

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    if (dr.Read())
                    {
                        user.EmailAddress = dr["Email"].ToString();
                        user.FirstName = dr["FirstNameId"].ToString();
                        user.LastName = dr["LastNameId"].ToString();
                        user.Role = dr["Role"].ToString();
                    }
                }
            }
            return user;
        }

        public void AddNewUser(UserInfo user)
        {
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("AddNewUser", cn) { CommandType = CommandType.StoredProcedure };

                SqlParameter param =
                    new SqlParameter("@Id", SqlDbType.Int) { Direction = ParameterDirection.Output };

                cmd.Parameters.Add(param);
                cmd.Parameters.AddWithValue("@FirstNameId", user.FirstNameId);
                cmd.Parameters.AddWithValue("@LastNameId", user.LastNameId);
                cmd.Parameters.AddWithValue("@Email", user.Email);
                cmd.Parameters.AddWithValue("@RoleId", user.RoleId);
                cmd.Parameters.AddWithValue("@UserName", user.UserName);
                cmd.Parameters.AddWithValue("@EmailConfirmed", user.EmailConfirmed);
                cmd.Parameters.AddWithValue("@TwoFactorEnabled", user.TwoFactorEnabled);
                cmd.Parameters.AddWithValue("@LockOutEnabled", user.LockOutEnabled);
                cmd.Parameters.AddWithValue("@AccessFailedCount", user.AccessFailedCount);

                cn.Open();

                cmd.ExecuteNonQuery();
                user.Id = param.Value.ToString();

            }

        }

        public IEnumerable<AdminListUsersRequest> GetAllUserListings()
        {
            List<AdminListUsersRequest> list = new List<AdminListUsersRequest>();
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("ShowAllUsers", cn) { CommandType = CommandType.StoredProcedure };

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {

                        AdminListUsersRequest row = new AdminListUsersRequest
                        {
                            EmailAddress = dr["Email"].ToString(),
                            FirstName = dr["FirstNameId"].ToString(),
                            LastName = dr["LastNameId"].ToString(),
                            Role = dr["Name"].ToString(),
                            UserId = dr["Id"].ToString()
                        };


                        list.Add(row);
                    }
                }
            }
            return list;

        }

        public IEnumerable<AdminListUsersRequest> GetAllRoles()
        {
            List<AdminListUsersRequest> list = new List<AdminListUsersRequest>();
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("GetAllRoles", cn) { CommandType = CommandType.StoredProcedure };
                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        AdminListUsersRequest row = new AdminListUsersRequest()
                        {
                            Role = dr["Name"].ToString()
                        };
                        list.Add(row);
                    }
                }
            }
            return list;
        }
    }
}
