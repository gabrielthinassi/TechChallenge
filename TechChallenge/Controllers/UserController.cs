using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TechChallenge.Models;
using TechChallenge.Services;

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
                var uploadService = new FileUpload();
                var avatarUrl = user.AvatarUrl != "" ? uploadService.UploadBase64Image(user.AvatarUrl) : "";
                user.AvatarUrl = avatarUrl;

                _dbContext.Users.Add(user);
                _dbContext.SaveChanges();
                return Ok(user);
            }
        }

        [HttpPost]
        [Route("uploadavatar")]
        public string PostFile([FromBody] UploadImageCommand command)
        {
            var uploadService = new FileUpload();
            return uploadService.UploadBase64Image(command.Image);
        }

        public class UploadImageCommand
        {
            public string Image { get; set; }
        }
    }
}
