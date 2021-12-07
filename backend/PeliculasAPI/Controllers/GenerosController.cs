using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;
using PeliculasAPI.Entidades;
using PeliculasAPI.Repositorios;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PeliculasAPI.Controllers
{
    [Route("api/generos")]
    [ApiController]// si el modelo de una accion es invalido se devuelve un error
    public class GenerosController: ControllerBase //tiene el 404
    {
        private readonly IRepositorio repositorio;
        private readonly WeatherForecastController weatherForecastController;
        private readonly ILogger<GenerosController> logger;

        public GenerosController(IRepositorio repositorio, 
            WeatherForecastController weatherForecastController,
            ILogger<GenerosController> logger)
        {
            this.repositorio = repositorio;
            this.weatherForecastController = weatherForecastController;
            this.logger = logger;
        }

        [HttpGet] //api/generos
        [HttpGet("listado")] //api/generos/listado
        [HttpGet("/listadogeneros")] // /listadogeneros
        public ActionResult<List<Genero>> Get()
        {
            logger.LogInformation("Vamos a mostrar los generos");
            return repositorio.obtenerTodosLosGeneros();
        }

        [HttpGet("guid")]
        public ActionResult<Guid> GetGuid()
        {
            return Ok(new
            {
                GUID_GenerosController = repositorio.obtenerGuid(),
                GUID_WeatherForecastController = weatherForecastController.obtenerGUIDWeatherForecastController()
            });
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<Genero>> Get(int Id, [FromHeader] string nombre)
        {
            logger.LogDebug($"Obteniendo un genero por el id");
            var genero = await repositorio.obtenerPorId(Id);

            if(genero == null)
            {
                logger.LogWarning($"No pudimos encontrar el genero de id {Id}");
                return NotFound();//esto viene de ActionResult
            }                

            return genero;
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genero genero)
        {
            repositorio.crearGenero(genero);
            return NoContent(); 
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genero genero)
        {
            return NoContent();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            return NoContent();
        }
    }
}
