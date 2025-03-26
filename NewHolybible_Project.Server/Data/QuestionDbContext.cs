using Microsoft.EntityFrameworkCore;

namespace NewHolybible_Project.Server.Data
{
    public class QuestionDbContext : DbContext
    {
        public QuestionDbContext(DbContextOptions<QuestionDbContext> options) : base(options)
        {
        }
        public DbSet<Entities.Question> Questions { get; set; } = null!;
        public DbSet<Entities.Choice> Choices { get; set; } = null!;
        public DbSet<Entities.Response> Responses { get; set; } = null!;
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

        }
    }
}

