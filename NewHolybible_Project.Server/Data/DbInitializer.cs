
using Microsoft.EntityFrameworkCore;
using NewHolybible_Project.Server.Entities;

namespace NewHolybible_Project.Server.Data
{
    public class DbInitializer
    {
        public static void InitDb(WebApplication app)
        {
            using var scope = app.Services.CreateScope();
            
            SeedData(scope.ServiceProvider.GetService<QuestionDbContext>());

        }

        private static void SeedData(QuestionDbContext context)
        {
            context.Database.Migrate();

            if ((context.Questions.Any()))
            {
                Console.WriteLine("Already have data - no need to seed");
                return;

            }
            var questions = new List<Question>()
            {
                new Question
                {
                    QuestionText = "மத்தேயு 15:8 பதில் யாருக்கு கூறப்பட்டது?",
                    Choices = new List<Choice>
                    {
                        new Choice {ChoiceText = "யூதர்கள்", IsCorrect = false},
                        new Choice {ChoiceText = "பரிசேயர்கள்", IsCorrect = true},
                        new Choice {ChoiceText = "சீஷர்கள்", IsCorrect = false},
                        new Choice {ChoiceText = "பிலாத்து", IsCorrect = false}
                    }
                },
                new Question
                {
                    QuestionText = "யார் பரலோக ராஜ்ஜியத்தில் பிரவேசிப்பார்கள்?",
                    Choices = new List<Choice>
                    {
                        new Choice {ChoiceText = "கிறிஸ்துவின் சபையார்கள் அனைவரும்", IsCorrect = false},
                        new Choice {ChoiceText = "தீர்க்கதரிசனம் உரைப்பவர்கள்", IsCorrect = false},
                        new Choice {ChoiceText = "பிசாசுகளை துரத்துபவர்கள்", IsCorrect = false},
                        new Choice {ChoiceText = "பிதாவின் சித்தத்தின்படி செய்கிறவர்கள்", IsCorrect = true}
                    }
                },
            };
            context.AddRange(questions);
            context.SaveChanges();
        }
    }
}
