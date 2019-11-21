using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarsLibrary.Models.Tables
{
    public class UserInfo
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string RoleId { get; set; }
        public string FirstNameId { get; set; }
        public string LastNameId { get; set; }
        public string Email { get; set; }
        public bool EmailConfirmed { get; set; }
        public bool PhoneNumberConfirmed { get; set; }
        public bool TwoFactorEnabled { get; set; }
        public bool LockOutEnabled { get; set; }
        public bool AccessFailedCount { get; set; }
        public string TestPassword { get; set; }
        public string TestRole { get; set; }
    }
}
