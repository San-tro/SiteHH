using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SaitHH.Controllers
{


    [Route("Jobs")]
    public class HHController : Controller
    {
        static readonly List<Vacancy> data;
        static HHController()
        {
            using (SiteContext db = new SiteContext())
            {
                data = db.Vacancy.ToList();
            }
        }
        [HttpGet("")]
        public IEnumerable<Vacancy> Get()
        {
            return data;
        }

    }
}
