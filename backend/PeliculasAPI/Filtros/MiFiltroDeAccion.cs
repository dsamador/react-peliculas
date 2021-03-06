using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;

namespace PeliculasAPI.Filtros
{
    public class MiFiltroDeAccion : IActionFilter
    {
        private readonly ILogger<MiFiltroDeAccion> logger;

        public MiFiltroDeAccion(ILogger<MiFiltroDeAccion> logger)
        {
            this.logger = logger;
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            logger.LogInformation("Antes de ejecutar la accion");
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            logger.LogInformation("Despues de ejecutar la accion");
        }
    }
}
