using System;
using System.Collections.Generic;


namespace TestWebApi.Models
{
     public class Bike
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public string Name_Model { get; set; }

        public int Release_year { get; set; }

        public int Weight { get; set; }

        public DateTime Push_time { get; set; }

        public int Count { get; set; }

        public string Decription { get; set; }

        public int Contact_Phone { get; set; }


        public int Count_Show { get; set; }


        
        public List<Bike_Photo> Photos { get; set; }

        public int CountryId { get; set; }
        public Country Country { get; set; }

        public int Engine_CapacityId { get; set; }
        public Engine_Capacity Engine_Capacity { get; set; }

        public int ManufactureID { get; set; }
        public Manufacture Manufacture { get; set; }

        public int KindId { get; set; }
        public Kind Kind { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }



    }
}
