using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WS2FD
{
    using System.IO;
    using System.Net;
    using System.Net.Mail;

    using Newtonsoft.Json;

    public class CheckEachCompany
    {
        public static readonly List<ErrorList> ErrorList = new List<ErrorList>();
        public static readonly List<NewCompany> NewCompanyList = new List<NewCompany>();
        private static int newCompanies = 0;
        public static void Start(List<WSCompanies> companies, List<ErrorList> errors)
        {
            var i = 1;
            var totalCompanies = companies.Count;
            string fdDomain = "weathershield";
            string apiKey = "zgUkAWW3h7nBcrAiNWR";
            string apiPath = string.Empty;

            foreach (var company in companies)
            {
                if (company.sold_to == "3027747" || company.sold_to == "3029419" || company.sold_to == "31819000"
                    || company.sold_to == "3024163" || company.sold_to == "3032476" || company.srCompany == true)
                {
                    apiPath = "/api/v2/search/companies?query=\"sold_to:" + company.sold_to + "%20AND%20ship_to:" + company.ship_to + "%20AND%20sync_status:'Synced'\"";
                }
                else
                {
                    apiPath = "/api/v2/search/companies?query=\"sold_to:" + company.sold_to + "%20AND%20ship_to:'Grouped'%20AND%20sync_status:'Synced'\"";
                }
                try
                {
                    HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://" + fdDomain + ".freshdesk.com" + apiPath);
                    request.ContentType = "application/json";
                    request.Method = "GET";
                    string authInfo = apiKey + ":X"; // It could be your username:password also.
                    authInfo = Convert.ToBase64String(Encoding.Default.GetBytes(authInfo));
                    request.Headers["Authorization"] = "Basic " + authInfo;
                    try
                    {
                        using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
                        {
                            Stream dataStream = response.GetResponseStream();

                            StreamReader reader = new StreamReader(dataStream);

                            var responseBody = reader.ReadToEnd();
                            //if the company exists update the company data
                            if (responseBody != "{\"results\":[],\"total\":0}" || responseBody != "{\"results\":[],\"total\":0}")
                            {
                                var returnedCompany = JsonConvert.DeserializeObject<SearchedCompany.RootObject>(responseBody);
                                company.fd_id = returnedCompany.results[0].id;

                                UpdateCompany(company, i, totalCompanies);
                            }
                            else
                            {
                                //if the company doesn't exist, create company here.
                                Console.BackgroundColor = ConsoleColor.Black;
                                Console.ForegroundColor = ConsoleColor.Red;
                                Console.WriteLine("Company Doesn't exist " + company.companyName + " " + company.ship_to + " " + i);
                                Console.ForegroundColor = ConsoleColor.White;
                                CreateACompany(company, i, totalCompanies);
                            }
                            reader.Close();
                            dataStream.Close();
                            i++;

                        }
                    }
                    catch (WebException ex)
                    {
                        Console.WriteLine("API Error: Your request is not successful. If you are not able to debug this error properly, mail us at support@freshdesk.com with the follwing X-Request-Id");
                        Console.WriteLine("X-Request-Id: {0}", ex.Response.Headers["X-Request-Id"]);
                        Console.WriteLine("Error Status Code : {1} {0}", ((HttpWebResponse)ex.Response).StatusCode, (int)((HttpWebResponse)ex.Response).StatusCode);
                        using (var stream = ex.Response.GetResponseStream())
                        using (var reader = new StreamReader(stream))
                        {
                            Console.Write("Error Response: ");
                            var message = reader.ReadToEnd();
                            Console.WriteLine(message);
                            var coError = new ErrorList();
                            coError.companyName = company.companyName;
                            coError.shipTo = company.ship_to;
                            coError.soldTo = company.sold_to;
                            coError.errorMessage = ex.Message;
                            coError.errorReason = message;
                            ErrorList.Add(coError);
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("ERROR");
                    Console.WriteLine(ex.Message);
                    var coErrors = new ErrorList();
                    coErrors.companyName = company.companyName;
                    coErrors.shipTo = company.ship_to;
                    coErrors.soldTo = company.sold_to;
                    coErrors.errorMessage = ex.Message;
                    coErrors.errorReason = "no reason provided";
                    ErrorList.Add(coErrors);
                }
            }
            CheckErrors(companies);
        }

        private static void CreateACompany(WSCompanies company, int i, int totalCompanies)
        {
            string fdDomain = "weathershield"; // your freshdesk domain
            string apiKey = "zgUkAWW3h7nBcrAiNWR"; // API path

            if (company.tier_level != "Preferred"
                && company.tier_level != "Exclusive Diamond"
                && company.tier_level != "Diamond"
                && company.tier_level != "Platinum")
            {
                company.tier_level = "Unknown";
            }
            string apiPath = "/api/v2/companies/";
            string json = string.Empty;
            if (company.sold_to == "3027747" ||
                company.sold_to == "3029419" ||
                company.sold_to == "31819000" ||
                company.sold_to == "3024163" ||
                company.sold_to == "3032476")
            {
                if (!string.IsNullOrEmpty(company.tm_phone))
                {
                    json = "{\"name\":\"" + company.ship_to + " " + company.companyName + " " + company.sold_to + "\",\"account_tier\":\"" + company.tier_level
                           + "\",\"custom_fields\":{\"territory_manager\":\"" + company.tm_name + "\",\"tm_phone_number\":\""
                           + company.tm_phone + "\",\"ship_to\":\"" + company.ship_to + "\",\"sold_to\":\"" + company.sold_to
                           + "\",\"sync_status\":\"Synced\",\"sync_date\":\"" + DateTime.Now + "\"}}";
                }
                else
                {
                    json = "{\"name\":\"" + company.ship_to + " " + company.companyName + " " + company.sold_to + "\",\"account_tier\":\"" + company.tier_level
                           + "\",\"custom_fields\":{\"territory_manager\":\"" + company.tm_name + "\",\"tm_phone_number\":\""
                           + "\",\"ship_to\":\"" + company.ship_to + "\",\"sold_to\":\"" + company.sold_to
                           + "\",\"sync_status\":\"Synced\",\"sync_date\":\"" + DateTime.Now + "\"}}";
                }

            }
            else
            {
                if (company.sold_to == company.ship_to && company.srCompany != true)
                {
                    //puts sold to in front and name at the end
                    json = "{\"name\":\"" + company.sold_to + " " + company.companyName + "\",\"account_tier\":\"" + company.tier_level
                           + "\",\"custom_fields\":{\"territory_manager\":\"\",\"tm_phone_number\":\"\",\"ship_to\":\"Grouped\",\"sold_to\":\"" + company.sold_to
                           + "\",\"sync_status\":\"Synced\",\"sync_date\":\"" + DateTime.Now + "\"}}";
                }
                else
                {
                    json = "{\"name\":\"" + company.ship_to + " " + company.companyName + " " + company.sold_to + "\",\"account_tier\":\"" + company.tier_level
                           + "\",\"custom_fields\":{\"ship_to\":\"" + company.ship_to + "\",\"sold_to\":\"" + company.sold_to
                           + "\",\"sync_status\":\"Synced\",\"sync_date\":\"" + DateTime.Now + "\"}}";
                }
            }
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://" + fdDomain + ".freshdesk.com" + apiPath);
            request.ContentType = "application/json";
            request.Method = "POST";
            byte[] byteArray = Encoding.UTF8.GetBytes(json);
            request.ContentLength = byteArray.Length;
            string authInfo = apiKey + ":X"; // It could be your username:password also.
            authInfo = Convert.ToBase64String(Encoding.Default.GetBytes(authInfo));
            request.Headers["Authorization"] = "Basic " + authInfo;
            Stream dataStream = request.GetRequestStream();
            dataStream.Write(byteArray, 0, byteArray.Length);
            dataStream.Close();
            try
            {
                Console.WriteLine(i + " of " + totalCompanies + " Submitting Request to create " + company.companyName);
                WebResponse response = request.GetResponse();
                // Get the stream containing content returned by the server.
                //Send the request to the server by calling GetResponse. 
                dataStream = response.GetResponseStream();
                // Open the stream using a StreamReader for easy access. 
                StreamReader reader = new StreamReader(dataStream);
                // Read the content. 
                string Response = reader.ReadToEnd();

                Console.ForegroundColor = ConsoleColor.Green;
                Console.WriteLine("Successfully Created Company in Freshdesk");
                i++;
                Console.ForegroundColor = ConsoleColor.White;
                var newCo = new NewCompany();
                newCo.companyName = company.companyName;
                newCo.soldTo = company.sold_to;
                newCo.shipTo = company.ship_to;
                NewCompanyList.Add(newCo);
                newCompanies++;
            }
            catch (WebException ex)
            {
                Console.WriteLine("API Error: Your request is not successful. If you are not able to debug this error properly, mail us at support@freshdesk.com with the follwing X-Request-Id");
                Console.WriteLine("X-Request-Id: {0}", ex.Response.Headers["X-Request-Id"]);
                Console.WriteLine("Error Status Code : {1} {0}", ((HttpWebResponse)ex.Response).StatusCode, (int)((HttpWebResponse)ex.Response).StatusCode);
                using (var stream = ex.Response.GetResponseStream())
                using (var reader = new StreamReader(stream))
                {
                    Console.Write("Error Response: ");
                    var message = reader.ReadToEnd();
                    Console.WriteLine(message);

                    var errors = new ErrorList();
                    errors.companyName = company.companyName;
                    errors.shipTo = company.ship_to;
                    errors.soldTo = company.sold_to;
                    errors.errorMessage = ex.Message;
                    errors.errorReason = message;
                    ErrorList.Add(errors);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("ERROR");
                Console.WriteLine(ex.Message + company.ship_to);
                var message = ex.Message;

                var errors = new ErrorList();
                errors.companyName = company.companyName;
                errors.shipTo = company.ship_to;
                errors.soldTo = company.sold_to;
                errors.errorMessage = ex.Message;
                errors.errorReason = "No additional reason provided. Failure in Create a Company method.";
                ErrorList.Add(errors);
            }
        }

        private static void UpdateCompany(WSCompanies company, int i, int totalCompanies)
        {
            string fdDomain = "weathershield"; // your freshdesk domain
            string apiKey = "zgUkAWW3h7nBcrAiNWR"; // API path
            string apiPath = "/api/v2/companies/" + company.fd_id + string.Empty;
            if (company.tier_level != "Preferred" && company.tier_level != "Exclusive Diamond" && company.tier_level != "Diamond"
                && company.tier_level != "Platinum")
            {
                company.tier_level = "Unknown";
            }
            string json = string.Empty;
            if (company.sold_to == "3027747" ||
                company.sold_to == "3029419" ||
                company.sold_to == "31819000" ||
                company.sold_to == "3024163" ||
                company.sold_to == "3032476")
            {
                json = "{\"name\":\"" + company.ship_to + " " + company.companyName + " " + company.sold_to + "\",\"account_tier\":\"" + company.tier_level
                       + "\",\"custom_fields\":{\"territory_manager\":\"" + company.tm_name + "\",\"tm_phone_number\":\""
                       + company.tm_phone + "\",\"ship_to\":\"" + company.ship_to + "\",\"sold_to\":\"" + company.sold_to
                       + "\",\"sync_status\":\"Synced\",\"sync_date\":\"" + DateTime.Now + "\"}}";
            }
            else
            {
                if (company.sold_to == company.ship_to && company.srCompany != true)
                {
                    if (!string.IsNullOrEmpty(company.tm_phone))
                    {
                        json = "{\"name\":\"" + company.sold_to + " " + company.companyName + "\",\"account_tier\":\"" + company.tier_level
                               + "\",\"custom_fields\":{\"territory_manager\":\"" + company.tm_name + "\",\"tm_phone_number\":\""
                               + company.tm_phone + "\",\"ship_to\":\"" + company.ship_to + "\",\"sold_to\":\"" + company.sold_to
                               + "\",\"sync_status\":\"Synced\",\"sync_date\":\"" + DateTime.Now + "\"}}";
                    }
                    else
                    {
                        json = "{\"name\":\"" + company.sold_to + " " + company.companyName + "\",\"account_tier\":\"" + company.tier_level
                               + "\",\"custom_fields\":{\"territory_manager\":\"\",\"tm_phone_number\":\"\",\"ship_to\":\"Grouped\",\"sold_to\":\"" + company.sold_to
                               + "\",\"sync_status\":\"Synced\",\"sync_date\":\"" + DateTime.Now + "\"}}";
                    }
                }
                else
                {
                    if (!string.IsNullOrEmpty(company.tm_phone))
                    {
                        json = "{\"name\":\"" + company.ship_to + " " + company.companyName + " " + company.sold_to + "\",\"account_tier\":\"" + company.tier_level
                               + "\",\"custom_fields\":{\"territory_manager\":\"" + company.tm_name + "\",\"tm_phone_number\":\""
                               + company.tm_phone + "\",\"ship_to\":\"" + company.ship_to + "\",\"sold_to\":\"" + company.sold_to
                               + "\",\"sync_status\":\"Synced\",\"sync_date\":\"" + DateTime.Now + "\"}}";
                    }
                    else
                    {
                        json = "{\"name\":\"" + company.ship_to + " " + company.companyName + " " + company.sold_to + "\",\"account_tier\":\"" + company.tier_level
                               + "\",\"custom_fields\":{\"territory_manager\":\"\",\"tm_phone_number\":\"\",\"ship_to\":\"Grouped\",\"sold_to\":\"" + company.sold_to
                               + "\",\"sync_status\":\"Synced\",\"sync_date\":\"" + DateTime.Now + "\"}}";
                    }

                }
            }
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://" + fdDomain + ".freshdesk.com" + apiPath);
            request.ContentType = "application/json";
            request.Method = "PUT";
            byte[] byteArray = Encoding.UTF8.GetBytes(json);
            request.ContentLength = byteArray.Length;
            string authInfo = apiKey + ":X"; // It could be your username:password also.
            authInfo = Convert.ToBase64String(Encoding.Default.GetBytes(authInfo));
            request.Headers["Authorization"] = "Basic " + authInfo;
            Stream dataStream = request.GetRequestStream();
            dataStream.Write(byteArray, 0, byteArray.Length);
            dataStream.Close();
            try
            {
                Console.WriteLine(i + " of " + totalCompanies + " Submitting Request to update " + company.companyName);
                WebResponse response = request.GetResponse();
                dataStream = response.GetResponseStream();
                StreamReader reader = new StreamReader(dataStream);
                string Response = reader.ReadToEnd();
                Console.ForegroundColor = ConsoleColor.Green;
                Console.WriteLine("company updated");
                Console.ForegroundColor = ConsoleColor.White;

            }
            catch (WebException ex)
            {
                Console.WriteLine("Ship To : " + company.ship_to + "API Error: Your request is not successful. If you are not able to debug this error properly, mail us at support@freshdesk.com with the follwing X-Request-Id");
                Console.WriteLine("X-Request-Id: {0}", ex.Response.Headers["X-Request-Id"]);
                Console.WriteLine("Error Status Code : {1} {0}", ((HttpWebResponse)ex.Response).StatusCode, (int)((HttpWebResponse)ex.Response).StatusCode);
                using (var stream = ex.Response.GetResponseStream())
                using (var reader = new StreamReader(stream))
                {
                    Console.Write("Error Response: ");
                    var message = reader.ReadToEnd();
                    Console.WriteLine(message);
                    var errors = new ErrorList();
                    errors.companyName = company.companyName;
                    errors.shipTo = company.ship_to;
                    errors.soldTo = company.sold_to;
                    errors.errorMessage = ex.Message;
                    errors.errorReason = message;
                    ErrorList.Add(errors);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("ERROR");
                Console.WriteLine(ex.Message + company.ship_to);

                var errors = new ErrorList();
                errors.companyName = company.companyName;
                errors.shipTo = company.ship_to;
                errors.soldTo = company.sold_to;
                errors.errorMessage = ex.Message;
                errors.errorReason = "No additional reason provided. Failure in Update Company method.";
                ErrorList.Add(errors);
            }
        }


        private static void CheckErrors(List<WSCompanies> companies)
        {
            if (ErrorList.Count > 0)
            {
                var message = "<b>There were " + ErrorList.Count + " errors(s) recognized on the " + DateTime.Now
                              + " Company Sync.</b><br><br>";

                foreach (var error in ErrorList)
                {
                    message += "<p><b>Company Name:</b> " + error.companyName
                               + " <br><b>Sold To :</b> " + error.soldTo + " <b>Ship To:</b> " + error.shipTo + " <br>"
                               + "<b>Message :</b> " + error.errorMessage + "<br><b>Reason :</b> " + error.errorReason
                               + "<br><br></p>";
                }

                var SMTP = new SmtpClient("smtp.office365.com");
                SMTP.UseDefaultCredentials = false;
                SMTP.Credentials = new NetworkCredential("weathershield.onesourceadmin@weathershield.com", "W#one!!#");
                SMTP.EnableSsl = true;
                SMTP.DeliveryMethod = SmtpDeliveryMethod.Network;
                SMTP.Port = 587;
                var mail = new MailMessage();
                mail.From = new MailAddress("weathershield.onesourceadmin@weathershield.com");
                mail.IsBodyHtml = true;
                mail.Subject = "Company Update Error Summary";
                mail.Body = message;
                mail.To.Add("adam.stouffer@weathershield.com");
                mail.To.Add("shanna.nernberger@weathershield.com");
                mail.To.Add("apps@weathershield.com");
                SMTP.Send(mail);

            }
            else
            {
                var message = "<b>Company Update completed with no errors. There were " + companies.Count + " companies cycled through.</b>";
                if (NewCompanyList.Count > 0)
                {
                    message += "<br><b><p>The following Companies were added</p></b><br>";
                    foreach (var newCompany in NewCompanyList)
                    {
                        message += "<p><b>Company Name :</b> " + newCompany.companyName + "<br><b>Sold To:</b> " +
                            newCompany.soldTo + " <b>Ship To:</b> " + newCompany.shipTo + "<br></p>";
                    }
                }
                var SMTP = new SmtpClient("smtp.office365.com");
                SMTP.UseDefaultCredentials = false;
                SMTP.Credentials = new NetworkCredential("weathershield.onesourceadmin@weathershield.com", "W#one!!#");
                SMTP.EnableSsl = true;
                SMTP.DeliveryMethod = SmtpDeliveryMethod.Network;
                SMTP.Port = 587;
                var mail = new MailMessage();
                mail.From = new MailAddress("weathershield.onesourceadmin@weathershield.com");
                mail.IsBodyHtml = true;
                mail.Subject = "Company Update Success Summary for " + companies.Count + " Companies.";
                mail.Body = message;
                mail.To.Add("adam.stouffer@weathershield.com");
                mail.To.Add("apps@weathershield.com");
                SMTP.Send(mail);
            }
        }

    }
}
