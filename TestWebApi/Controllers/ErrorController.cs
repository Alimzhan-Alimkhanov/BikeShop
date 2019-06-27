using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TestWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ErrorController : ControllerBase
    {

        [AllowAnonymous]
        [HttpGet("{notfound}")]
        public ContentResult Get()
        {
            Response.StatusCode = (int)HttpStatusCode.NotFound;
            return Content("Page not Found");
            //json or text
            //return Redirect("~/NotFoundPage.json");
        }

    }
}