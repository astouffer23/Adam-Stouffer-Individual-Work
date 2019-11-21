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
    public class ContactUsRepo : IContactUsRepo
    {
        public List<GetContactUsRequests> GetContactUsListings()
        {
            List<GetContactUsRequests> list = new List<GetContactUsRequests>();
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("GetContactUs", cn) { CommandType = CommandType.StoredProcedure };

                cn.Open();

                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {

                        GetContactUsRequests row = new GetContactUsRequests
                        {
                            ContactId = dr["Contactid"].ToString(),
                            ContactName = dr["ContactName"].ToString(),
                            ContactEmail = dr["ContactEmail"].ToString(),
                            ContactPhone = dr["ContactPhone"].ToString(),
                            ContactMessage = dr["ContactMessage"].ToString()
                        };


                        list.Add(row);
                    }
                }
            }
            return list;
        }

        public void AddNewContactUs(AddContactUs user)
        {
            using (var cn = new SqlConnection(Settings.GetConnectionString()))
            {
                SqlCommand cmd = new SqlCommand("AddNewContactUs", cn) { CommandType = CommandType.StoredProcedure };

                SqlParameter param = new SqlParameter("@ContactId", SqlDbType.Int) { Direction = ParameterDirection.Output };

                cmd.Parameters.Add(param);

                cmd.Parameters.AddWithValue("@ContactName", user.ContactName);
                cmd.Parameters.AddWithValue("@ContactEmail", user.ContactEmail);
                cmd.Parameters.AddWithValue("@ContactPhone", user.ContactPhone);
                cmd.Parameters.AddWithValue("@ContactMessage", user.ContactMessage);

                cn.Open();

                cmd.ExecuteNonQuery();

                user.ContactId = param.Value.ToString();

            }
            
        }
    }
}
