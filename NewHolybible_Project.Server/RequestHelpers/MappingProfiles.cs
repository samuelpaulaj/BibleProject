using NewHolybible_Project.Server.Dtos;
using NewHolybible_Project.Server.Entities;

namespace NewHolybible_Project.Server.RequestHelpers
{
    public static class MappingProfiles
    {
        //Dto to Entity - Receiving data from client
   

        //Entity to Dto - Sending data to client
        public static List<QuestionDto> MapToQuestionDtoList(List<Question> questions)
        {
            return questions.Select(q => new QuestionDto
            {
                Id = q.Id,
                QuestionText = q.QuestionText,
                Choices = q.Choices.Select(c => new ChoiceDto
                {
                    ChoiceText = c.ChoiceText
                }).ToList(),
                DateCreated = q.DateCreated.ToDateTime(TimeOnly.MinValue)
            }).ToList();
        }
    }
}
