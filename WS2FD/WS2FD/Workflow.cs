using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WS2FD
{
    public class Workflow
    {
        public static void StartProgram()
        {
            var listOfErrors = new List<ErrorList>();
            var wsList = GetWSList.Start();
            CheckEachCompany.Start(wsList, listOfErrors);
        }
    }


}
