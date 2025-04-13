
using System.Net;

namespace app;
public class RedirectMiddleware : IMiddleware
{
    private const string BaseNewUrl = "https://djoufson.com";

    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        var path = context.Request.Path.Value;
        var query = context.Request.QueryString.Value;
        var statusCode = (int)HttpStatusCode.Redirect;
        var redirectUrl = $"{BaseNewUrl}{path}{query}";
        context.Response.StatusCode = statusCode;
        context.Response.Redirect(redirectUrl);
        await Task.CompletedTask;
        return;
    }
}
