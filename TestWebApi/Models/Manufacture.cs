using System;
using System.Collections.Generic;
using System.Text;

namespace TestWebApi.Models
{
   public class Manufacture
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<Bike> List_Bike { get; set; }
    }
}
