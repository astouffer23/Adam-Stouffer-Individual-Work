using System;
using System.Collections.Generic;
using IBM.Data.DB2.iSeries;

namespace WS2FD
{
    public class GetWSList
    {
        public static List<WSCompanies> Start()
        {
            var dbConn = new iDB2Connection();
            var companies = new List<WSCompanies>();
            var exclusiveCompanies = new List<WSCompanies>();
            dbConn.ConnectionString = "DataSource=TSFCPROD;UserID=ORDACCESS;Password=SSECCADRO;LibraryList=QTEMP,MSTLIB,HSTLIB,MISLIB,CATLIB,OBJLIB,QGPL,UTILITY,PRODCTL,PRODDTA,TSCDTA,SNEFIL,SNEPGM;Naming=System";
            dbConn.Open();

            var command = "SELECT ABAN8 as ShipTo, ABAN81 as SoldTo, ABALPH as CompanyName, abac01, drdl01 as DealerLevel, e.FMTNAM as TMName, wpar1, wpph1 ";
            command += "FROM f0101 ";
            command += "left join salmas e on abac01 = e.salter ";
            command += "left join f0005 j on abac26 = substr(j.drky,8,1) ";
            command += "left outer join proddta.f0115  on wpan8 = e.empno ";
            command += "WHERE abat1 = 'C' and e.salter = ABAC01 and trmdte = 0 ";
            command += "and drsy = '01' and drrt = '26' ";
            command += "and abac01 not in('001','996','997','998','300') ";
            command += "and wpphtp = 'BCEL' ";
            command += "order by ABAN8";

            iDB2Command cmdDate = new iDB2Command(command, dbConn);
            iDB2DataReader drDate = cmdDate.ExecuteReader();
            while (drDate.Read())
            {
                var shipTo = Convert.ToString(drDate["ShipTo"]).Trim();
                var soldTo = Convert.ToString(drDate["SoldTo"]).Trim();
                var companyName = Convert.ToString(drDate["CompanyName"]).Trim();
                var territoryManager = Convert.ToString(drDate["TMName"]).Trim();
                var tierLevel = Convert.ToString(drDate["DealerLevel"]).Trim();
                var company = new WSCompanies();
                company.companyName = companyName;
                company.tier_level = tierLevel;
                if (company.tier_level == string.Empty)
                {
                    company.tier_level = "Preferred";
                }
                company.tm_name = territoryManager;
                company.ship_to = shipTo;
                company.sold_to = soldTo;
                company.tm_area = Convert.ToString(drDate["WPAR1"]).Trim();
                company.tm_phone = company.tm_area + "-" + Convert.ToString(drDate["WPPH1"]).Trim();
                if (company.sold_to == "3027747" ||
                    company.sold_to == "3029419" ||
                    company.sold_to == "31819000" ||
                    company.sold_to == "3024163" ||
                    company.sold_to == "3032476")
                {
                    if (company.sold_to != company.ship_to)
                    {
                        //if (company.companyName == "WEATHER SHIELD / SERVICE")
                        //{
                            companies.Add(company);
                        //}
                        
                    }
                }
                else
                {
                    if (company.sold_to == company.ship_to)
                    {
                        //if (company.companyName == "WEATHER SHIELD / SERVICE")
                        //{
                            companies.Add(company);
                        //}
                    }
                }
                //SendMessageToFreshdesk(dbCompany, message);
            }
            dbConn.Close();
            dbConn.Open();
            command = "SELECT ABAN8 as ShipTo, ABAN81 as SoldTo, ABALPH as CompanyName, abac01, drdl01 as DealerLevel, e.FMTNAM as TMName, wpar1, wpph1 FROM f0101 ";
            command += "left join salmas e on abac01 = e.salter ";
            command += "left join f0005 j on abac26 = substr(j.drky,8,1) ";
            command += "left outer join proddta.f0115  on wpan8 = e.empno ";
            command += "WHERE ABAT1 = 'SR' and e.salter = ABAC01 and trmdte = 0 ";
            command += "and drsy = '01' and drrt = '26' and ";
            command += "abac01 in('996') ";
            command += "order by ABAN8";
            var cmdDate2 = new iDB2Command(command, dbConn);
            var drDate2 = cmdDate2.ExecuteReader();
            while (drDate2.Read())
            {
                var shipTo = Convert.ToString(drDate2["ShipTo"]).Trim();
                var soldTo = Convert.ToString(drDate2["SoldTo"]).Trim();
                var companyName = Convert.ToString(drDate2["CompanyName"]).Trim();
                var territoryManager = Convert.ToString(drDate2["TMName"]).Trim();
                var tierLevel = Convert.ToString(drDate2["DealerLevel"]).Trim();
                var company = new WSCompanies();
                company.srCompany = true;
                company.companyName = companyName;
                company.tier_level = tierLevel;
                if (company.tier_level == string.Empty || company.tier_level == ".")
                {
                    company.tier_level = "Preferred";
                }
                company.tm_name = territoryManager;
                company.ship_to = shipTo;
                company.sold_to = soldTo;
                if (company.sold_to == "3027747" ||
                    company.sold_to == "3029419" ||
                    company.sold_to == "31819000" ||
                    company.sold_to == "3024163" ||
                    company.sold_to == "3032476")
                {
                    if (company.sold_to != company.ship_to)
                    {
                        //if (company.companyName == "WEATHER SHIELD/SERVICE" || company.companyName == "REILLY/SERVICE REP")
                        //{
                            companies.Add(company);
                        //}
                    }
                }
                else
                {
                    //if (company.companyName == "WEATHER SHIELD/SERVICE" || company.companyName == "REILLY/SERVICE REP")
                    //{
                        companies.Add(company);
                    //}
                }

                //SendMessageToFreshdesk(dbCompany, message);
            }
            dbConn.Close();




            return companies;

        }
    }
}
