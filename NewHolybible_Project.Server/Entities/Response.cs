using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NewHolybible_Project.Server.Entities
{
    public class Response
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public int QuestionId { get; set; }

        [ForeignKey("QuestionId")]  
        public Question Question { get; set; } = null!; // Add null-forgiving operator  

        [Required]
        public int ChoiceId { get; set; }

        [ForeignKey("ChoiceId")]
        public Choice Choice { get; set; } = null!; // Add null-forgiving operator

        public string Comment { get; set; } = string.Empty;
        public DateTime SubmittedDate { get; set; } = DateTime.UtcNow;
    }
}
