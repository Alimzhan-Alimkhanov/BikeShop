using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestWebApi.Models
{
    public class Advert
    {
        public int Id { get; set; }


        public string Organization { get; set; }

        public string Type { get; set; }


        public int UserId { get; set; }

        public User User { get; set; }


        //public string model { get; set; }


        //public string engine { get; set; }


        //public string maxspeed { get; set; }


        //public string weight { get; set; }

        //public int count { get; set; }

        //public string manufacturer { get; set; }


        //public int release_age { get; set; }

        //public string release_coutry { get; set; }


        //public string Title { get; set; }

        //public string Description { get; set; }

        //public string City { get; set; }


        //public DateTime pushtime { get; set; }







    }
}
