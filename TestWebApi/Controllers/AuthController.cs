using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using TestWebApi.Data;
using TestWebApi.Models;

namespace TestWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository repo,IConfiguration config)
        {
            _repo = repo;
            _config = config;
        }

        public string Get()
        {
            return "AUTH";
        }

  
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserRegister userRegister)
         {
            userRegister.username = userRegister.username.ToLower();

            if (await _repo.UserExict(userRegister.username))
                return BadRequest("Username already exicts");

            var newUser = new User
            {
                Name = userRegister.username,
                Gender = userRegister.Gender
            };

            var createdUser = await _repo.Register(newUser,userRegister.password);
            return StatusCode(201);
        }
        

        //Аутентификация
        [HttpPost("login")]
        public async Task<IActionResult> Login(UserLogin userlogin)
        {   

            var user = await _repo.Login(userlogin.username,userlogin.password);

            if (user == null)
              return Unauthorized();

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier,user.Id.ToString()),
                new Claim(ClaimTypes.Name,user.Name);
            };


            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
            var credits = new SigningCredentials(key,SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                //токен на день
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = credits
            };

            var tokenHandler = new JwtSecurityTokenHandler();


            //var token = tokenHandler.CreateToken(tokenDescriptor);
            var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));

            //var response = new
            //{
            //    access_token = token,
            //    username = user.Name
            //};


            ////tokenHandler.WriteToken(token);
            //Response.ContentType = "application/json";
            //await Response.WriteAsync(JsonConvert.SerializeObject(response, new JsonSerializerSettings { Formatting = Formatting.Indented }));



            return Ok(new { token }); 
        }






    }



}


//РОль указывается в токене
//ASP.NET Core Identity - для входа с других сервисов