
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Primitives;
using TestWebApi.Models;

namespace TestWebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly BAZAContext _dbcontext;

        public HomeController(BAZAContext context)
        {
            _dbcontext = context;
        }

      
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var users = await _dbcontext.Users.ToListAsync();

       //    foreach(var h in ControllerContext.HttpContext.Request.Headers)
         //   {
           //     Debug.WriteLine("           "+h.Key+"  "+h.Value);
            //}


        
            StringValues token;


            if (ControllerContext.HttpContext.Request.Headers.TryGetValue("Authorization",out token))
            {
                Debug.WriteLine("TOKENNN: " + token);        
            }

        
             



           
           

            return Ok(users);
        }


        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {

            var user = await _dbcontext.Users.FirstOrDefaultAsync(x => x.Id==id);

           

            if(user==null)
            {
                return NotFound();
            }

            return Ok(user);

            //var exp =  new Exception("Error Database use");  - создания ошибки и его инициализация
            //exp.Source = "Exception in HomeControll get(id) method";
        }

        [AllowAnonymous]
        [HttpGet("users")]
        public IEnumerable<User> data()
        {
            return _dbcontext.Users;
        }

        [AllowAnonymous]
        [HttpGet("adverts")]
        public IEnumerable<Advert> adverts()
        {

            return _dbcontext.Adverts;
        }



    }
}



//CreatedAtAction что оно делаеть ?
//Async методы ис-я при обращении метода к бд и ресурсам когда запрос за-ть много времени
//для Web клиента можно испол-ть Angular