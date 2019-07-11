using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TestWebApi.Models
{
    public class UserRegister
    {

        [Required(ErrorMessage = "username is empty")]
        public string username { get; set; }

        [Required]
        [StringLength(8,MinimumLength =4,ErrorMessage = "Password range 4-8")]
        public string  password { get; set; }

        [Required]
        public string Gender { get; set; }

        [Required]
        [Range(18,150)]
        public int Age { get; set; }

        [Required]
        public string Number { get; set; }

    }
}
