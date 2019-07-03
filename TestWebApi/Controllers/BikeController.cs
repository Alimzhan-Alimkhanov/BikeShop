using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TestWebApi.Models;

namespace TestWebApi.Controllers
{

    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class BikeController : ControllerBase
    {

        private readonly BAZAContext _dbcontext;

        public BikeController(BAZAContext context)
        {
            _dbcontext = context;
        }



        [AllowAnonymous]
        [HttpGet]
        public IEnumerable<Bike> Index()
        {
            return _dbcontext.Bikes;
        }

    }
}