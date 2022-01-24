using Microsoft.AspNetCore.Mvc;

namespace JsonParseApi.Controllers
{
    [ApiController]
    [Route("json")]
    public class JsonParseController : Controller
    {
        [HttpGet]
        public string Index()
        {
            return "React is the shit!";
        }
    }
}