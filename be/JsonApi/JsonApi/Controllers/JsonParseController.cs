using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace JsonApi.Controllers
{
    [ApiController]
    [Route("json")]
    public class JsonParseController : ControllerBase
    {
        [HttpGet]
        [Route("/parse")]
        public List<string> FindProperties(List<string> propertiesName)
        {
            return new List<string>();
        }
    }
}