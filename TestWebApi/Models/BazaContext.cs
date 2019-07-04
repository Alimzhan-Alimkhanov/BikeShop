using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestWebApi.Models
{
    public class BAZAContext : DbContext
    {
        public BAZAContext(DbContextOptions<BAZAContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }

        public DbSet<User_Photo> User_Photos { get; set; }

        public DbSet<Bike> Bikes { get; set; }


        public DbSet<Bike_Photo> Bike_Photos  { get; set; }

        public DbSet<City> Cities  { get; set; }

        public DbSet<Country> Countries   { get; set; }

        public DbSet<Engine_Capacity> Engine_Capacities  { get; set; }

        public DbSet<Kind> Kinds { get; set; }

        public DbSet<Manufacture> Manufactures  { get; set; }

       

        


    }
}
