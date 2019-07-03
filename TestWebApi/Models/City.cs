using System;
using System.Collections.Generic;
using System.Text;

namespace TestWebApi.Models
{
    public class City
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<Bike> List_Bike { get; set; }
    }
}
