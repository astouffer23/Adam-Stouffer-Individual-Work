using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CarsLibrary.UI.Models
{
    public class UserViewModel
    {
        public ApplicationUser User { get; set; }
        public List<ApplicationUser> Users { get; set; }
        public List<ApplicationUser> Roles { get; set; }
        public string Role { get; set; }
        [Required(ErrorMessage = "Please enter a first name.")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Please enter a last name.")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Please enter an email.")]
        [EmailAddress(ErrorMessage = "That is an invalid email address.")]
        public string Email { get; set; }

        public string Password { get; set; }


        public string PasswordConfirm { get; set; }

        [Required(ErrorMessage = "Please choose a role.")]
        public string UserId { get; set; }
        public List<SelectListItem> UserSelect { get; set; }
        public List<SelectListItem> RoleSelect { get; set; }

        public UserViewModel()
        {
            Users = new List<ApplicationUser>();
            UserSelect = new List<SelectListItem>();
            RoleSelect = new List<SelectListItem>();
        }
    }
}