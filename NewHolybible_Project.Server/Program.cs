using Microsoft.EntityFrameworkCore;
using NewHolybible_Project.Server.Data;
//using AutoMapper; // Add this using directive
//using Microsoft.Extensions.DependencyInjection; // Add this using directive
//using AutoMapper.Extensions.Microsoft.DependencyInjection; // Add this using directive

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<QuestionDbContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
});
//builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies()); // Ensure AutoMapper.Extensions.Microsoft.DependencyInjection is installed
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

try
{
    DbInitializer.InitDb(app);
}
catch (Exception e)
{
    Console.WriteLine(e);
}

app.Run();
