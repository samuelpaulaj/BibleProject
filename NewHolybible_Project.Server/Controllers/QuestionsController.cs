using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NewHolybible_Project.Server.Data;
using NewHolybible_Project.Server.Dtos;
using NewHolybible_Project.Server.RequestHelpers;

namespace NewHolybible_Project.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestionsController : ControllerBase
    {
        private readonly QuestionDbContext _context;

        public QuestionsController(QuestionDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<QuestionDto>>> GetQuestions()
        {
            var questions = await _context.Questions.Include(x => x.Choices).ToListAsync();

            var questionDtos = MappingProfiles.MapToQuestionDtoList(questions);

            return Ok(questionDtos);
        }

        [HttpGet("{createdDate}")]
        public async Task<ActionResult<List<QuestionDto>>> GetQuestionsByDate(string createdDate)
        {
            if (!DateTime.TryParseExact(createdDate, "MM/dd/yyyy", null, System.Globalization.DateTimeStyles.None, out DateTime parsedDate))
            {
                return BadRequest("Invalid date format. Please use MM/dd/yyyy.");
            }

            var questions = await _context.Questions
                .Include(x => x.Choices)
                .Where(x => x.DateCreated == DateOnly.FromDateTime(parsedDate))
                .ToListAsync();

            var questionDtos = MappingProfiles.MapToQuestionDtoList(questions);
            return Ok(questionDtos);
        }
    }
}
