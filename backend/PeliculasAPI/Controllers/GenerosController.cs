using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
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

        public GenerosController(IRepositorio repositorio, WeatherForecastController weatherForecastController)
        {
            this.repositorio = repositorio;
            this.weatherForecastController = weatherForecastController;
        }

        [HttpGet] //api/generos
        [HttpGet("listado")] //api/generos/listado
        [HttpGet("/listadogeneros")] // /listadogeneros
        public ActionResult<List<Genero>> Get()
        {
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
            var genero = await repositorio.obtenerPorId(Id);

            if(genero == null)
            {
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
