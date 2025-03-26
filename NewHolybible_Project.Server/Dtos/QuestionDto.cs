using NewHolybible_Project.Server.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace NewHolybible_Project.Server.Dtos
{
    public class QuestionDto
    {

        public int Id { get; set; }
        public string QuestionText { get; set; } 
        public List<ChoiceDto> Choices { get; set; }
        public DateTime DateCreated { get; set; }
    }

    public class ChoiceDto
    {
        public string ChoiceText { get; set; }
    }
}
