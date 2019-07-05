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

            // List<Manufacture> bikes = _dbcontext.Manufactures.Include(m => m.List_Bike).Where(p => p.Name == name);

            //var bikes = _dbcontext.Manufactures.Include(m => m.List_Bike).Where(p => p.Name == name);

            //   var bikes = _dbcontext.Manufactures.Include(m => m.List_Bike).FirstOrDefault();


            //List<> list = _dbcontext.Bikes.ToList();

            // var json = JsonConvert.SerializeObject(bikes.ToArray());

            //Manufacture mans = _dbcontext.Manufactures.FirstOrDefault();
            //_dbcontext.Bikes.Where(p => p.ManufactureID == mans.Id).Load();

           

            return Ok(mans);
        }



        [AllowAnonymous]
        [HttpGet("Find")]
        public string Find(int cost,string city,string country, string  en_cap, string kind, string manufacture)
        {
            

            return $"City:{city},Country: {country},En_Cap: {en_cap},Kind: {kind}, Manufacture: {manufacture}";
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