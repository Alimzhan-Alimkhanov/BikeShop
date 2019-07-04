using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestWebApi.Models
{
    public class User
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

        public DateTime Created {get;set;}

        public DateTime LastActive{get;set;} 

        public string Gender { get; set; }

        public int Age { get; set; }


        public string  Telephone_number { get; set; }


        public User_Photo User_Photo { get; set; }


        public List<Bike> User_List_Bike { get; set; }

 

      



    }
}
