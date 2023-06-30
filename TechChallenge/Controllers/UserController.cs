using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TechChallenge.Models;

namespace TechChallenge.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DbtechChallengeContext _dbContext;

        public UserController(DbtechChallengeContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult Get()
        {
            List<User> users = _dbContext.Users.ToList();
            return StatusCode(StatusCodes.Status200OK, users);
        }

        [HttpPost]
        public IActionResult Post([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest();
            } else
            {
                _dbContext.Users.Add(user);
                _dbContext.SaveChanges();
                return Ok(user);
            }
        }
    }
}
