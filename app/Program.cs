using app;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<RedirectMiddleware>();
var app = builder.Build();

if (app.Environment.IsProduction())
{
    app.UseHsts();
    app.UseHttpsRedirection();
}

app.UseMiddleware<RedirectMiddleware>();
app.Run();
