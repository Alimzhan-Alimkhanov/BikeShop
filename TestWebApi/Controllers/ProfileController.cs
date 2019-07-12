using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using TestWebApi.Helpers;
using TestWebApi.Models;

namespace TestWebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {

        private readonly BAZAContext _dbcontext;


        public ProfileController(BAZAContext context) {
            _dbcontext = context;
        }




        [HttpGet("GetCurrentUser")]
        public async Task<IActionResult> GetCurrentUser()
        {
            var id = Convert.ToInt32(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var current_user = (from user in _dbcontext.Users
                        where user.Id == id select user).FirstOrDefault();

            
             
            return Ok(current_user);
        }


        [HttpPost("EditCurrentUser")]
        public async Task<IActionResult> EditCurrentUser(UserEdit user_edit)
        {

            var id = Convert.ToInt32(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var current_user = (from user in _dbcontext.Users
                            where user.Id == id
                            select user).FirstOrDefault();

            current_user.Name = user_edit.Name;
            current_user.Gender = user_edit.Gender;
            current_user.Age = user_edit.Age;
            current_user.Telephone_number = user_edit.Telephone_number;
               
            _dbcontext.SaveChanges();


            return Ok();
        }

        [HttpGet("GetCurrentUserPhoto")]
        public async Task<IActionResult> GetCurrentUserPhoto()
        {

            var id = Convert.ToInt32(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var current_user_photo = (from userphoto in _dbcontext.User_Photo
                            where userphoto.UserId == id
                            select userphoto).FirstOrDefault();

              
            return Ok(current_user_photo);
        }








        //public  int getid()
        //{
        //    return Convert.ToInt32(User.FindFirst(ClaimTypes.NameIdentifier).Value);
        //    //StringValues value = "";


        //    //try
        //    //{
        //    //    ControllerContext.HttpContext.Request.Headers.TryGetValue("Authorization", out value);
        //    //}
        //    //catch(Exception ex)
        //    //{
        //    //    return BadRequest(ex.Message);
        //    //}

        //    //var jwt_token = value.ToString().Replace("Bearer ", string.Empty);

        //    //var tokenHandler = new JwtSecurityTokenHandler();

        //    //var token = tokenHandler.ReadJwtToken(jwt_token);

        //    //var claims = token.Claims;

        //    // var user_id = claims.Select(Claim).Where(c => c.Type == ClaimTypes.NameIdentifier);



        //    Debug.WriteLine(getid());

        //    //foreach(var claim in claims)
        //    //{
        //    //    Debug.WriteLine(claim.);
        //    //}

        //}


    }
}