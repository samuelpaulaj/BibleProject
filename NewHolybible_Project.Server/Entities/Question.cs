using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NewHolybible_Project.Server.Entities
{
    public class Question
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        [MaxLength(1000)]
        public string QuestionText { get; set; } = string.Empty;
        public List<Choice> Choices { get; set; } = new List<Choice>();
        public DateOnly DateCreated { get; set; } = DateOnly.FromDateTime(DateTime.UtcNow);

    }

    public class Choice
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        [MaxLength(200)]
        public string ChoiceText { get; set; } = string.Empty;
        public bool IsCorrect { get; set; }

        [Required]
        public int QuestionId { get; set; }
        [ForeignKey("QuestionId")]
        public Question Question { get; set; } = null!; // Add null-forgiving operator

    }
}
