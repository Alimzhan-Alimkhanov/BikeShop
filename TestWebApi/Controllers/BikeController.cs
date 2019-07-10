using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using TestWebApi.Models;

namespace TestWebApi.Controllers
{

    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class BikeController : ControllerBase
    {

        private readonly BAZAContext _dbcontext;
        private readonly IHostingEnvironment _appenvironment;

        public BikeController(BAZAContext context,IHostingEnvironment environment)
        {
            _dbcontext = context;
            _appenvironment = environment;
        }


        [AllowAnonymous]
        [HttpGet("GetBike")]
        public async Task<IActionResult> GetBike()
        {
            if(_dbcontext.Bikes.Count() == 0)
            {
                return BadRequest("Table Bikes Empty");
            }

            return Ok(_dbcontext.Bikes);
        }

        [AllowAnonymous]
        [HttpGet("GetManBike/{name}")]
        public async Task<IActionResult> GetManBike(string name)
        {
            
            var bs = (from bike in _dbcontext.Bikes
                      where bike.Manufacture.Name == name
                      select bike).ToList();


            return Ok(bs);
        }



        [AllowAnonymous]
        [HttpGet("Find")]
        public async Task<IActionResult> Find(int? cost,string city,string country, int?  en_cap, string kind, string manufacture)
        {
            IEnumerable<Bike> list_bike = null;


            if(cost==null && city==null &&  country == null &&  en_cap ==null &&  kind ==null &&  manufacture == null)
            {
                return BadRequest("Ничего не выбрано ");
            }

            list_bike = (from bike in _dbcontext.Bikes
                         where (bike.Cost >= cost || cost == null )&&
                         (bike.City.Name == city || city == null ) &&
                         (bike.Country.Name == country || country==null ) &&
                         (bike.Engine_Capacity.capacity >= en_cap || en_cap==null )&&
                         (bike.Kind.Name == kind  || kind == null) &&
                         (bike.Manufacture.Name == manufacture || manufacture ==null)
                         select bike).ToList();


       

            return Ok(list_bike);
        }

        [AllowAnonymous]
        [HttpGet("Findx")]
        public string Findx(int cost, string city)
        {


            return $"City:{city},Cost:{cost}";
        }












        //[AllowAnonymous]
        //[HttpGet]
        //public IActionResult Index()
        //{
        //    var file = Path.Combine(_appenvironment.WebRootPath + "/Bike_Images/BMW-K-1300-S.jpg");

        //    return PhysicalFile(file,"image/jpg");
        //}

    }
}